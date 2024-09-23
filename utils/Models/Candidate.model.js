
const {Schema,model} = require("mongoose")

const candidateSchema = new Schema({
   name:{  type: String, required: true},
    age:{  type: String },
    exprience:{  type: String, },
    location:{  type: String,},
    skills:{  type: Array, required: true},
})

const Candidate = new model("Candidate",candidateSchema);

module.exports = Candidate;