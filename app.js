const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const connection = require('./config/database');

// Models
const User = require('./models/user');
const Empleado = require('./models/empleado');
const Cliente = require('./models/cliente');
const Gerente = require('./models/gerente');
const Mecanico = require('./models/mecanico');
const Administrador = require('./models/administrador');
const Vehiculo = require('./models/vehiculo');
const Orden = require('./models/orden');
const Servicio = require('./models/servicio');
const Repuesto = require('./models/repuesto');
const Marca = require('./models/marca');
const Modelo = require('./models/modelo');

// Sincroniza los cambios en los modelos
connection.sync({ logging: false });

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}.`));