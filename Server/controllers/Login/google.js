const { OAuth2Client } = require("google-auth-library")
const { generateToken } = require("../../handlers/token")
const client = new OAuth2Client(process.env.GOOGLE_KEY)
const { UserLogin, User } = require("../../models")

const googleAuth = async (req, res) => {
    const { token } = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_KEY
    })

    const payload = ticket.getPayload()
    console.log(payload)
    const { sub, email, name, picture } = payload

    const newUserLogin = await UserLogin.findOne({ "google.email": email })
    if (!newUserLogin) {
        const signupUserLogin = new UserLogin({
            google: {
                email,
                id: sub,
                name
            }
        })
        const savedUserLogin = await signupUserLogin.save()
        const newUser = User({
            login: savedUserLogin._id,
            name,
            address: ["this is address"],
            phone: "",
            bought: ["testing"],
            photoURL: picture,
            email,
        })

        newUser.save()
        generateToken({ email }).then(data => {
            return res.status(200).json({
                user: newUser,
                token: data
            })
        })
    } else {
        const userInfo = await User.findOne({ login: newUserLogin._id })
        generateToken({ email }).then(data => {
            return res.status(200).json({
                user: userInfo,
                token: data
            })
        })
    }
}

module.exports = googleAuth