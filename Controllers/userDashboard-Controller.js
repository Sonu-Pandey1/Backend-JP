const User = require("../utils/Models/User.models")

const home = async (req,res,next)=>{

try {

    const data = await User.find({},{password:0});
    console.log(data)
    res.status(200).json(data);
    
} catch (error) {
    console.log(error);
    next(error)
    
}

}

module.exports = {home}