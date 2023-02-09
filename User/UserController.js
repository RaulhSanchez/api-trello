const userData = require('./UserModel')
const method = require('./UserFunctions')

module.exports.createUser = async (req, res,err) => {
    try {
        const newUser = req.body;
        const setPas = method.verifyPass(newUser.password)
        const setRole = method.setRole(newUser.role)
        if(setPas){
            newUser.role = await setRole
            await userData.create(newUser)
            res.status(200).json({ user: 'Usuario creado' }); 
        }else{
            res.status(200).json({ user: 'La contraseña tiene que contener mínimo 8 carácteres con mayúsculas, minúsculas, números y carácteres especiáles $#!' }); 
        }                
    } catch (err) {
       method.erroLogs(err,res)
    }
}

module.exports.login = async (req, res) => {
    try {
      const checkMail = await userData.findOne({ email: req.body.email })
      const checkPassword = method.compareHash(req.body.password, checkMail.password)
      if (checkPassword) {
        const data = method.createToken(checkMail)
        res.json({ data: data })
      } else { res.send({ mensaje: '¡Error! Tu email o contraseña son incorrectos.' }) }
    } catch (err) {
        method.erroLogs(err,res.send({ mensaje: '¡Error! Tu email o contraseña son incorrectos.' })) }
  }



