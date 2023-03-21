const mongoose = require("mongoose");
const seedAdmin = require("../../seed/Admin")

async function connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/DBWeb", {
            useNewUrlParser: true,
        });
        console.log("connect successfully");
        await seedAdmin.createAdmin()
    } catch (error) {
        console.log("connect fail");
    }
}
module.exports = { connect };
