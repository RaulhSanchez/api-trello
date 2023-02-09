const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const moment = require("moment")


module.exports.erroLogs = async(err,res) => {
    if(err.code=== 11000){
        res.send({
            error: 'Usuario existe',
        })
    }
     res.send({
        error: err.errors,
    })
}

module.exports.setRole = async (role) => {
    console.log(role)

    const roles = [
        'user',
        'streamer',
        'admin'
    ]
    if(!role){
        return  role = await roles[0];
    }
}

module.exports.verifyPass = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/
    return regex.test(password)
}

module.exports.createHash = (password) => {
        let encrypted = bcrypt.hashSync(password, 10)
        return encrypted
}

module.exports.compareHash = (passwordPlane, userPass) => {
    let comparation = bcrypt.compareSync(passwordPlane, userPass)
    return comparation
}

module.exports.createToken = (user) => {
    const payload = {
        data: user._id,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }
    console.log(payload)
    return jwt.sign(payload, process.env.PORT)
}