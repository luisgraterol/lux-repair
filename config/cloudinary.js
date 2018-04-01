const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'luisgraterol',
    api_key: '942633995938838',
    api_secret: 'Ma164Z4IFkGaR4LOzJTS9mglnMM'
});

module.exports = cloudinary;