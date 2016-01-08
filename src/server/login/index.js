import passport from 'passport';
import FacebookStrategy from 'passport-facebook-canvas';

passport.use(new FacebookStrategy({
  clientID: process.env.FB_APP_ID,
  clientSecret: process.env.FB_APP_SECRET,
  callbackURL: 'https://apps.facebook.com/${process.env.FB_APP_ID}'
}, (accessToken, refreshToken, profile, done) => {
  // asynchronous verification, for effect...
  process.nextTick(() => {
    // To keep the example simple, the user's Facebook profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Facebook account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));

const redirect = `
  <!DOCTYPE html>
  <html>
    <body>
      <script type='text/javascript'>
        top.location.replace('/auth/facebook');
      </script>
    </body>
  </html>`;

export const login = (app) => {
  app.get('/auth/facebook',
    passport.authenticate('facebook-canvas', { successRedirect: '/', failureRedirect: '/error' }));
  app.get('/auth/facebook/canvas/autologin', (req, res) => res.send(redirect));
  app.post('/auth/facebook/canvas',
    passport.authenticate('facebook-canvas',
      { successRedirect: '/', failureRedirect: '/auth/facebook/canvas/autologin' }));
  app.use(passport.initialize());
};

export const ensureAuthenticated = (req, res, next) => {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }
  // if they aren't redirect them to the home page
  res.redirect('/');
};
