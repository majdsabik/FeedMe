const User = require('../models/Customer');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt'); // !!!
const passport = require('passport');
const Employee = require('../models/Employee');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://feedme-ironhack.herokuapp.com/api/auth/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        User.findOne({ googleId: profile.id })
          .then(found => {
            if (found !== null) {
              // user with that githubId already exists
              done(null, found);
            } else {
              // no user with that githubId
              return User.create({
                googleId: profile.id,
                firstName: profile.given_name,
                email: profile.email,
              }).then(dbUser => {
                done(null, dbUser);
              });
            }
          })
          .catch(err => {
            done(err);
          });
      });
    }
  )
);

passport.use(
  'customer',
  new LocalStrategy((username, password, next) => {
    User.findOne({ email: username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect email' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password' });
        return;
      }

      next(null, foundUser);
    });
  })
);

passport.use(
  'employee',
  new LocalStrategy((username, password, next) => {
    Employee.findOne({ userName: username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect credentials' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect credentials' });
        return;
      }

      next(null, foundUser);
    });
  })
);
