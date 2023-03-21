const express = require("express");
const passport = require("passport");
const { loginController } = require("../controllers")
const googleAuth = require("../controllers/Login/google")
const { verifyToken } = require("../handlers/token")

const router = express.Router();


router.post("/auth/google", googleAuth)
router.get("/auth/facebook", passport.authenticate('facebook-token'), loginController.facebook.facebookLogin)

router.post("/login",
    passport.authenticate("local-login",),
    loginController.local.localLogin);

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/api');
    });
});
router.post("/signup",
    passport.authenticate("local-signup"),
    loginController.local.localSignUp);
router.post("/check-token", verifyToken, (req, res) => res.json("Authorized"))
module.exports = router;
