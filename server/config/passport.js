// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/admin');

// passport.use(new LocalStrategy(async (username, password, done) => {
//   try {
//     const admin = await Admin.findOne({ username });

//     if (!admin) {
//       return done(null, false, { message: 'Incorrect username or password' });
//     }

//     const passwordMatch = await bcrypt.compare(password, admin.password);

//     if (!passwordMatch) {
//       return done(null, false, { message: 'Incorrect username or password' });
//     }

//     return done(null, admin);
//   } catch (error) {
//     return done(error);
//   }
// }));

// // Create and verify JWT tokens
// passport.serializeUser((user, done) => {
//   const token = jwt.sign({ id: user._id }, process.env.REACT_APP_JWT_SECRET);
//   done(null, token);
// });

// passport.deserializeUser((token, done) => {
//   jwt.verify(token, process.env.REACT_APP_JWT_SECRET, async (err, decoded) => {
//     if (err) {
//       return done(err);
//     }

//     try {
//       const user = await Admin.findById(decoded.id);
//       done(null, user);
//     } catch (error) {
//       done(error);
//     }
//   });
// });