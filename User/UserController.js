const userData = require('./UserModel')


module.exports.createUser = async (req, res) => {
    try {
        const newUser = req.body;
        await userData.create(newUser)
        console.log(newUser)
      res.status(200).json({ user: newUser }); 
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "Requested path not found",
            stack: error.stack,
            });
    }
  }