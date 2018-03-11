const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const Orden = require('../models/orden');

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
        
        for (let i=0; i<data.length; i++) {
            let response = await Orden.update({ FechaAdmision: data[i].fechaAdmision }, 
                {
                    where:
                    {
                        Vehiculo: data[i].id,
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