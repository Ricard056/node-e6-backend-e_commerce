const User = require("../../models/User")

const user = async() => {

    const userCreate = {
        firstName: "rey",
        lastName: " Bararzate",
        email: "rey@gmail.com",
        password: "rey150",
        phone: "+12345"
    }

    await User.create(userCreate)
    
}

module.exports = user