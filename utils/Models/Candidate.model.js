
const {Schema,model} = require("mongoose")

const candidateSchema = new Schema({
   name:{  type: String, required: true},
   email:{type:String},
    // age:{  type: String },
    exprience:{  type: String, },
    location:{  type: String,},
    skills:{  type: Array},
    about:{ type: String },
    img:{ type:String,}
})

const Candidate = new model("Candidate",candidateSchema);

module.exports = Candidate;