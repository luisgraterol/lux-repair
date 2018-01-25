const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const connection = require('./database');

module.exports = function(passport) {
    let opts = {};

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = connection.config.password; // 'password'

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.id, (err, user) => {
            if (err)
                return done(err, false);
            
            if (user)
                return done(null, user);
            else
                return done(null, false);
        });
    }));
}