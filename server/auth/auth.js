import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User';

passport.use(new LocalStrategy({
        userNameField: 'login',
        passwordField: 'password',
    },
    function (username, password, done) {
        // db requesting
        // done(err) if something went wrong
        // done (null, user) is OK
        // done (null, false, { message: 'Incorrect pass' })
        // done (null, false, { message: 'Incorrect login' })
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);


    User.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});

passport.use(new BearerStrategy(
    function (accessToken, done) {
        AccessToken.findOne({ token: accessToken }, function (err, token) {

            if (err) {
                return done(err);
            }

            if (!token) {
                return done(null, false);
            }

            if (Math.round((Date.now() - token.created) / 1000) > config.get('security:tokenLife')) {

                AccessToken.remove({ token: accessToken }, function (err) {
                    if (err) {
                        return done(err);
                    }
                });

                return done(null, false, { message: 'Token expired' });
            }

            User.findById(token.userId, function (err, user) {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, { message: 'Unknown user' });
                }

                var info = { scope: '*' };
                done(null, user, info);
            });
        });
    }
));
