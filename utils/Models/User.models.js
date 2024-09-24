
// import mongoose from "mongoose";
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        
    },

    email: {
        type: String,
        required: true,


    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });



// ? secure the password with the bcrypt

UserSchema.pre("save", async function (next) {

    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error)

    }
});

// compare password 

UserSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password,this.password)
}

//  generate  json web token

UserSchema.methods.generateToken = async function () {

    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            // password:this.password,
            // ph:this.ph,
            // userlastname:this.userlastname,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        );

    } catch (error) {
        console.log(error)

    }

}


const User = new mongoose.model("User", UserSchema);

module.exports = User;