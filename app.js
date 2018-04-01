const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const connection = require('./config/database');

// Routes
const users = require('./routes/users');
const cliente = require('./routes/cliente');
const gerente = require('./routes/gerente');
const admin = require('./routes/admin');
const mecanico = require('./routes/mecanico');

// Models
const User = require('./models/user');
const Empleado = require('./models/empleado');
const Cliente = require('./models/cliente');
const Gerente = require('./models/gerente');
const Mecanico = require('./models/mecanico');
const Administrador = require('./models/administrador');
const Vehiculo = require('./models/vehiculo');
const Orden = require('./models/orden');
const Repuesto = require('./models/repuesto');
const Marca = require('./models/marca');
const Modelo = require('./models/modelo');
const Orden_tiene_Rep = require('./models/orden-tiene-repuesto');

// Sync changes in models
connection.sync({ logging: false });

// Create app
const app = express();

// Port Number
const port = 3000;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Router
app.use('/users', users);
app.use('/cliente', cliente);
app.use('/gerente', gerente);
app.use('/admin', admin);
app.use('/mecanico', mecanico);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}.`));