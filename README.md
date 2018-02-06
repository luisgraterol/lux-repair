# LuxRepair
Un sistema de gestión de talleres mecánicos para autos de lujo desarrollado con NodeJS, Express, Angular y SequelizeJS.


## Importante
> Es necesario correr el archivo *fk-setup.sql* una vez que estén creadas todas las tablas de la base de datos para configurar todas las claves foráneas correspondientes a alguna relación de herencia.

## Guía de Instalación
Primero, para clonar el repositorio, abres una ventana en el *command line* dentro de la carpeta principal y corres lo siguiente:
```
git clone https://github.com/luisgraterol/lux-repair.git
```
Una vez clonado el repositorio, debes corres el siguiente comando para crear la carpeta */node_modules* con todas las dependencias:
```
npm install --save
```
Luego, debes correr lo siguiente para cambiar de carpeta:
```
cd angular-src
```
Y de nuevo creas la carpeta */node_modules*, pero esta vez dentro de la carpeta *angular-src* corriendo:
```
npm install --save
```

Una vez que hayas hecho todo esto, finalmente puedes correr la aplicación. Para ello tienes que:
1. Correr ```nodemon``` en la carpeta principal de la app.

2. Correr ```ng serve``` en otra ventana del *command line* situada dentro de la carpeta *"angular-src"*.

##### Happy coding! 👨🏽‍💻

## Librerías y Otras Herramientas
* [Angular](https://angular.io) Frontend Framework
* [Express](http://expressjs.com/) Backend Framework
* [Node](https://nodejs.org) JavaScript Enviroment
* [Sequelize](http://docs.sequelizejs.com/) SQL ORM 
* [Passport](http://www.passportjs.org/) Auth Library
* [QRcode](https://github.com/soldair/node-qrcode) QR Code Generation Code
* [NodeMailer](https://nodemailer.com/about/) Mail Sender Library
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) CSS Framework
* [Github](https://guides.github.com) Version Control
