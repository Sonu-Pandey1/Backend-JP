
const { Schema, model} = require("mongoose");

const jobsSchema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required:true },
    salary: { type: String,},
    description: { type: String,},
    location: { type: String, required:true },


})

const Jobs = new model("job",jobsSchema);
module.exports = Jobs

