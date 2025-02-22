const User = require("../utils/Models/User.models")
const bcrypt = require("bcryptjs");



const home = async (req, res) => {
    try {
        res.status(200).send("route from router ram g ki jay")
    } catch (error) {
        console.log(error)


        
    }
}


const register = async (req, res) => {

    try {

        console.log(req.body)
        const { username, email, password } = req.body;

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "email already exists" })
        }

        const userCreated = await User.create({ username, email, password })

        res.status(200).json({ msg: "Registration successful , Now logged in😇.", token: await userCreated.generateToken(), userId: userCreated._id.toString() });

    } catch (error) {

        res.status(500).json("internal server error")

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body, "body")

        const userExist = await User.findOne({ email });
        console.log(userExist, "finduser");

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const user = await userExist.comparePassword(password);


        if (user) {
            res.status(200).json({
                msg: "login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });

        }
        else {
            res.status(401).json({ message: "Invalid email or password " });
        }

    } catch (error) {
        console.log(error)

    };

};

const user = async (req, res) => {
    try { 
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });

    } catch (error) {
        console.log(`error from the user route ${error}`);

    }

}








module.exports = { home, register, login, user }