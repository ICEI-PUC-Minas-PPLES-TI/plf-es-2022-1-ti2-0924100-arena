const localStrategy = require('passport-local').Strategy

//Model de atleta
const Atleta = require('../Backend/Models/Atleta')

module.exports = function(passport){
    passport.use(new localStrategy({usernameField: 'EmailAtleta',passwordField: 'Senha'},
        function(username, password, done) {
          Atleta.findOne({ EmailAtleta: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
    ));
}