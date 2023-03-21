const { generateToken } = require("../../handlers/token")
const { UserLogin, User } = require("../../models")

const createUser = (id) => {
    const newUser = new User({
        login: id,
        name: "testing user",
        address: ["This is address"],
        phone: "0909090909",
        bought: ["testing"],
        photoURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60"
    })
    return newUser
}
exports.localLogin = async (req, res) => {
    const { bought, name, phone, address, _id, photoURL, email } = req.user
    console.log(req.user)
    generateToken({ id: _id }).then((data) => res.status(200).json({
        user: {
            id: _id,
            bought,
            name,
            phone,
            address,
            photoURL,
            email
        },
        token: data
    }))
}
exports.localSignUp = async (req, res) => {
    const { email } = req.body
    const newUserLogin = await UserLogin.findOne({ "local.email": email })
    if (!newUserLogin) return res.status(500).json("Oops")

    let newUser = await User.findOne({ login: newUserLogin._id })
    if (newUser) return res.status(200)

    newUser = createUser(newUserLogin._id)
    newUser.save()
    generateToken({ email }).then((data) => res.json(data))
}