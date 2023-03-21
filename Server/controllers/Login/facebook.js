const { generateToken } = require("../../handlers/token")
const { UserLogin, User } = require("../../models")

const createUser = (id) => {
    const newUser = new User({
        login: id,
        name: "",
        address: [],
        phone: "",
        bought: []
    })
    return newUser
}

exports.facebookLogin = async (req, res) => {
    const { email, name } = req.user.facebook
    const newUserLogin = await UserLogin.findOne({ "facebook.email": email })
    console.log(req.user)

    if (!newUserLogin) return res.status(500).json("not found")

    let newUser = await User.findOne({ login: newUserLogin._id })
    if (newUser) {
        generateToken({ email }).then(data => {
            return res.status(200).json({ user: newUser, token: data })
        })
    } else {
        newUser = new User({
            login: newUserLogin._id,
            name,
            address: ["this is address"],
            phone: "",
            bought: ["testing"],
            photoURL: req.user.photoURL
        })
        newUser.save((err) => {
            if (err) {
                throw (err)
            }
            generateToken({ email }).then((data) => {
                return res.json({
                    user: newUser,
                    token: data
                })
            })
        })
    }
}