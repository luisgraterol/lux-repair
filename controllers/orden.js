const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const cloudinary = require('../config/cloudinary');
const qrcode = require('qrcode');

// Modelos Utilizados
const Orden = require('../models/orden');
const Usuario = require('../models/user');
const Vehiculo = require('../models/vehiculo');
const Marca = require('../models/marca');
const Modelo = require('../models/modelo');
const Orden_tiene_Rep = require('../models/orden-tiene-repuesto');

const controller = {};

controller.solicitar = async function (data, callback) {
    try {
        cloudinary.uploader.upload(data.Imagen, result => {

            // Manejo del error
            if (!result) {
                console.log('Error al montar la imagen del vehiculo en Cloudinary.');
                return false;
            }

            Orden.create({
                Vehiculo: data.idVehiculo,
                Estado: 'En Espera',
                Servicio: data.Servicio,
                Detalle: data.Detalles,
                Evaluacion: 'Por Evaluar',
                FechaSolicitud: obtenerFechaHoy(),
                Imagen: result.secure_url
            });

            callback(null);
        });
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
};

controller.actualizar = async function (data, callback) {
    try {
        console.log('REPUESTOS: ', data.repuestos);
        console.log('VEHICULO: ', data.vehiculo);
        console.log('ESTADO: ', data.estado);
        
        let response = await Orden.update({ Estado: data.estado }, { where: { Vehiculo: data.vehiculo, Activa: true } });

        let orden = await Orden.findOne({ where: { Vehiculo: data.vehiculo, Activa: true } });

        for (let i=0; i<data.repuestos.length; i++) {
            Orden_tiene_Rep.create({
                Orden: orden.dataValues.id,
                Repuesto: data.repuestos[i].id
            });
        }

        callback(null);
        
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

controller.condicionEntrega = async function (data, callback) {
    try {
        let response = await Orden.update({
            Estado: data.Estado,
            Evaluacion: data.Evaluacion
        },
        {
            where: {
                Vehiculo: data.id,
                Activa: true
        }}
    );
        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

controller.asignarAdmision = async function (data, callback) {
    try {
        for (let i=0; i<data.vehiculos.length; i++) {
            let vehiculo = data.vehiculos[i];
            let response = await Orden.update({ FechaAdmision: data.vehiculos[i].FechaAdmision }, 
                {
                    where:
                    {
                        Vehiculo: data.vehiculos[i].id,
                        Activa: true
                    }
                });
            
            let buscarCliente = await Usuario.findById(vehiculo.Cliente);
            let cliente = buscarCliente.dataValues;

            let fechaFormateada = `${vehiculo.FechaAdmision.substr(8, 2)}-${vehiculo.FechaAdmision.substr(5, 2)}-${vehiculo.FechaAdmision.substr(0,4)}`;

            // Generar codigo QR
            let orden = await Orden.findOne({
                where: {
                    Vehiculo: data.vehiculos[i].id,
                    Activa: true 
                }
            });

            // Generar codigo QR
            let dataURI = await qrcode.toDataURL(orden.dataValues.id.toString());

            // Guardar QR en servicio remoto
            cloudinary.uploader.upload(dataURI, result => {

                if (!result) {
                    console.log('Error al montar el QR en Cloudinary.');
                    return false;
                }

                // Enviar correo
                let transporter = nodemailer.createTransport({
                    // @ts-ignore
                    service: 'gmail',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'luxrepair.app@gmail.com',
                        pass: 'Luxrepair/1'
                    },
                    tls: {
                        rejectUnauthorize: false
                    }
                });

                // Setup email data with unicode symbols
                let mailOptions =
                    {
                        from: `"${data.gerente.nombre} ${data.gerente.apellido} 🚗" <luxrepair.app@gmail.com>`,    // sender address
                        to: cliente.Email,                                                                         // receiver
                        subject: `Hola, ${cliente.Nombre}!`,                                                       // Subject line
                        html: `
                            <!DOCTYPE html>
                            <html>
                                <head>
                                    <meta charset="utf-8" />
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <title>Page Title</title>
                                    <meta name="viewport" content="width=device-width, initial-scale=1">
                                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                                        crossorigin="anonymous">
                                </head>
                                <body class="bg-light">
                                    <div class="container-fluid">
                                        <div class="row main text-dark mx-auto">
                                            <div class="card rounded mx-auto my-5 p-5 col-12 col-md-8 col-lg-6">
                                                <p class="lead body">
                                                    <span class="bigger">Querido ${cliente.Nombre},</span>
                                                    <br>
                                                    <br>
                                                    La solicitud de reparación para su ${vehiculo.Marca} ${vehiculo.Modelo} fue procesada con éxito. Se le asignó el día ${fechaFormateada} como fecha de admisión de su vehículo al taller. El servicio de
                                                    <span class="h5 body">${vehiculo.Servicio}</span> solicitado se realizará tan pronto su vehículo llegue.
                                                    <br>
                                                    <br>
                                                    Debes descargar el código QR en el siguiente enlace y llevarlo a la cita:
                                                    <br>
                                                    <br>
                                                    <span class="small">${result.secure_url}</span>
                                                    <br>
                                                    <br>
                                                    Gracias por confiar en nosotros la reparación de su vehículo.
                                                    <br>
                                                    <br>
                                                    Atentamente,
                                                </p>
                                                <h5 class="lead body ml-md-5">${data.gerente.nombre} ${data.gerente.apellido}</h5>
                                                <p class="h5 ml-md-5">Gerente en LuxRepair Workshops</p>
                                            </div>
                                            <div class="container">
                                                <h6 class="text-muted text-center">
                                                    <a class="btn btn-link" href="https://luxrepair.herokuapp.com">Visítanos aquí.</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <style>
                                        .title {
                                            min-height: 10rem;
                                        }

                                        .bigger {
                                            font-size: 20pt;
                                        }

                                        .body {
                                            font-size: 16pt;
                                        }
                                        .card {
                                            box-shadow: 0px 3px 15px rgba(0,0,0,0.2) !important;
                                        }
                                        .display {
                                            font-size: 25pt;
                                        }
                                    </style>
                                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                                        crossorigin="anonymous"></script>
                                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                                        crossorigin="anonymous"></script>
                                </body>
                            </html>`
                    };

                // Send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                });

                // Guardar URL del QR en la BD
                let response = Orden.update({ QR: result.secure_url }, { where: { id: orden.id } });
            });

        }

        callback(null);
        
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

controller.asignarMecanico = async function (data, callback) {
    try {
        console.log('Llegamos al controlador con los datos: ', data);
        for (let i = 0; i < data.vehiculos.length; i++) {
            let response = await Orden.update({ Mecanico: data.id },
                {
                    where:
                        {
                            Vehiculo: data.vehiculos[i],
                            Activa: true
                        }
                });
        }

        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

// Metodo que retorna el reporte de los mecanicos 
controller.getReporteMecanico = async function (data,callback) {
    try {
        console.log('Llegamos al controlador con los datos id mecanico es : ', data);
        let response = await Orden.findAll({ where: {Mecanico:data.id} });

        // Construye un arreglo unicamente con los datos necesarios
        let ordenes = response.map(resultado => resultado.dataValues);
    
        // Retorna el arreglo
        console.log('Llegamos al controlador con : ', ordenes);
        callback({ordenes}, null);
    } catch (err) {
        callback(null, err);
    }
};

// Metodo que retorna el reporte del vehiculo 
controller.getReporteVehiculo = async function (data,callback) {
    try {
        console.log('Llegamos al controlador con los datos id vehiculo es : ', data);
        let response = await Orden.findAll({ where: {Vehiculo:data.id} });

        // Construye un arreglo unicamente con los datos necesarios
        let ordenes = response.map(resultado => resultado.dataValues);
    
        // Retorna el arreglo
        console.log('Llegamos al controlador con : ', ordenes);
        callback({ordenes}, null);
    } catch (err) {
        callback(null, err);
    }
};

controller.finalizar = async function (data, callback) {
    try {
        // Actualizar la tabla Orden
        let response = await Orden.update({ Estado: 'Listo', Activa: false, FechaFinalizacion: new Date() }, { 
            where: {
                Vehiculo: data.vehiculo.id,
                Activa: true
            }
        });

        let buscarCliente = await Usuario.findById(data.vehiculo.Cliente);
        let cliente = buscarCliente.dataValues;

        // Valida si existe el cliente
        if (!cliente) return false;

        let transporter = nodemailer.createTransport({
            // @ts-ignore
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'luxrepair.app@gmail.com',
                pass: 'Luxrepair/1'
            },
            tls: {
                rejectUnauthorize: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"${data.gerente.nombre} ${data.gerente.apellido} 🚗" <luxrepair.app@gmail.com>`,   // sender address
            to: cliente.Email,                                                                        // receiver
            subject: `Hola, ${cliente.Nombre}!`,                                                      // Subject line
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>Page Title</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossorigin="anonymous">
                </head>
                <body class="bg-light">
                    <div class="container-fluid">
                        <div class="row bg-dark title">
                            <div class="col-12 col-md-8 m-auto">
                                <p class="display lead text-light text-center">¡Su vehículo está listo!</p>
                            </div>
                        </div>
                        <div class="row main text-dark mx-auto">
                            <div class="card rounded mx-auto my-5 p-5 col-12 col-md-8 col-lg-6">
                                <p class="lead body">
                                    <span class="bigger">Querido ${cliente.Nombre},</span>
                                    <br>
                                    <br> Su ${data.vehiculo.Marca} ${data.vehiculo.Modelo} está listo para ser retirado. El servicio de
                                    <span
                                        class="h5 body">${data.vehiculo.Servicio}</span> se ha completado con éxito. Puede acercarse al taller apenas le sea
                                        conveniente.
                                        <br>
                                        <br> Atentamente,
                                </p>
                                <h5 class="lead body ml-md-5">${data.gerente.nombre} ${data.gerente.apellido}</h5>
                                <p class="h5 ml-md-5">Gerente en LuxRepair Workshops</p>
                            </div>
                            <div class="container">
                                <h6 class="text-muted text-center">
                                    <a class="btn btn-link" href="https://luxrepair.herokuapp.com">Visítanos aquí.</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <style>
                        .title {
                            min-height: 15rem;
                        }

                        .bigger {
                            font-size: 20pt;
                        }

                        .body {
                            font-size: 16pt;
                        }
                        .card {
                            box-shadow: 0px 3px 15px rgba(0,0,0,0.2) !important;
                        }
                        .display {
                            font-size: 25pt;
                        }
                    </style>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossorigin="anonymous"></script>
                </body>
                </html>
            `
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
        callback(null);

    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

controller.cancelar = async function (data, callback) {
    try {
        let response = await Orden.update({ Activa: false }, { where: { Vehiculo: data.id, Activa: true } });
        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
}

controller.obtener = async function (data, callback) {
    try {
        let responseOrden = await Orden.findById(data.orden);
        let orden = responseOrden.dataValues;

        // Busca el vehiculo
        let responseVehiculo = await Vehiculo.findOne({ 
            where: {
                id: orden.Vehiculo,
                Activo: true
            }
        });

        let vehiculo = responseVehiculo.dataValues;

        // Agrega todos los datos de la orden al vehiculo
        vehiculo.Estado = orden.Estado;
        vehiculo.Evaluacion = orden.Evaluacion;
        vehiculo.Servicio = orden.Servicio;
        vehiculo.FechaSolicitud = orden.FechaSolicitud;
        vehiculo.FechaAdmision = orden.FechaAdmision;
        vehiculo.Detalle = orden.Detalle;
        vehiculo.codigoQR = orden.QR;
        vehiculo.Imagen = orden.Imagen;

        if (orden.Activa == '1') {
            vehiculo.OrdenActiva = true;
        } else {
            vehiculo.OrdenActiva = false;
        }

        // Busca la marca del vehiculo
        let responseMarca = await Marca.findById(vehiculo.Marca);
        vehiculo.Marca = responseMarca.dataValues.Nombre;


        // Busca el modelo del vehiculo
        let responseModelo = await Modelo.findById(vehiculo.Modelo);
        vehiculo.Modelo = responseModelo.dataValues.Nombre;

        // Retorna todos los datos
        console.log('Se retorna el siguiente vehiculo: ', vehiculo);
        callback(vehiculo, null);

    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(null, err);
    }
};

module.exports = controller;

// Funcion que retorna la fecha presente en un string
function obtenerFechaHoy() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Enero es 0!
    var year = today.getFullYear();

    let dayString = day.toString();
    let monthString = month.toString();

    if (day < 10) {
        dayString = "0" + day;
    }

    if (month < 10) {
        monthString = "0" + month;
    }

    return monthString + "/" + dayString + "/" + year + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}