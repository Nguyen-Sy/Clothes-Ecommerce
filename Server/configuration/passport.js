const LocalStrategy = require('passport-local').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const { UserLogin, User } = require('../models');

module.exports = function (passport) {
	// passport session setup
	// serialize: determines which data of the user object should be stored in the session
	passport.serializeUser(function (user, done) {
		done(null, user._id);
	});
	passport.deserializeUser(function (id, done) {
		User.findOne({ login: id }, (err, user) => {
			done(err, user);
		})
	});

	// LOCAL SIGNUP
	passport.use('local-signup', new LocalStrategy({
		// mặc định local strategy sử dụng username và password,
		// chúng ta cần cấu hình lại
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, email, password, done) {
			// asynchronous
			// Hàm callback của nextTick chỉ được thực hiện khi hàm trên nó trong stack (LIFO) được thực hiện
			// UserLogin.findOne sẽ không được gọi cho tới khi dữ liệu được gửi lại
			process.nextTick(function () {
				UserLogin.findOne({ 'local.email': email }, function (err, user) {
					if (err) return done(err);

					if (user) {
						return done(null, false);
					} else {
						const newUserLogin = new UserLogin();
						newUserLogin.local.email = email;
						newUserLogin.local.password = newUserLogin.generateHash(password);

						newUserLogin.save(function (err) {
							if (err)
								throw err;
							return done(null, newUserLogin);
						});
					}
				});
			});
		}));

	// LOCAL LOGIN
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, email, password, done) {
			// find a user whose email is the same as the forms email
			// we are checking to see if the user trying to login already exists
			UserLogin.findOne({ 'local.email': email }, function (err, userLogin) {
				if (err) return done(err);
				if (!userLogin || !userLogin.validPassword(password))
					return done(null, false);

				User.findOne({ login: userLogin._id }, function (err, user) {
					user.email = email
					return done(null, user);
				})
			});
		})
	);

	// FACEBOOK-TOKEN
	passport.use('facebook-token', new FacebookTokenStrategy({
		clientID: process.env.FACEBOOK_KEY,
		clientSecret: process.env.FACEBOOK_SECRET_KEY,
		fbGraphVersion: 'v3.0'
	}, function (accessToken, refreshToken, profile, done) {
		const { name, email } = profile._json
		const photoURL = profile.photos[0].value
		const { id } = profile
		UserLogin.findOne({ 'facebook.email': email }, function (err, userLogin) {
			if (err) return done(err)
			if (!userLogin) {
				const newUserLogin = new UserLogin({
					facebook: {
						id,
						name,
						email
					}
				})
				newUserLogin.save((err) => {
					if (err) throw err;
					const user = { ...newUserLogin._doc, photoURL }
					console.log(user)
					return done(null, user)
				})
			} else {
				done(null, { ...userLogin._doc, photoURL })
			}
		})
	}))
};