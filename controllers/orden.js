const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

// Modelos Utilizados
const Orden = require('../models/orden');
const Usuario = require('../models/user');
const Vehiculo = require('../models/vehiculo');
const Marca = require('../models/marca');
const Modelo = require('../models/modelo');

const controller = {};

// Metodo que crea una orden de reparacion para un vehiculo dado
controller.solicitar = async function (data, callback) {
    try {
        let response = await Orden.create({
            Vehiculo: data.idVehiculo,
            Estado: 'En Espera',
            Servicio: data.Servicio,
            Detalle: data.Detalles,
            Evaluacion: 'Por Evaluar',
            FechaSolicitud: obtenerFechaHoy()
        });
        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de la orden: ', err);
        callback(err);
    }
};

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

            // setup email data with unicode symbols
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
                                    <br>La solicitud de reparación para su ${vehiculo.Marca} ${vehiculo.Modelo} fue procesada con éxito. Se le asignó el día ${fechaFormateada} como fecha de admisión de su vehículo al taller. El servicio de
                                    <span class="h5 body">${vehiculo.Servicio}</span> solicitado se realizará tan pronto su vehículo llegue.
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
                </html>    
            `};

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
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