

const { Schema, model } = require("mongoose")

const companySchema = new Schema({
    name: { type: String, required: true },
    industry: { type: String, },
    employees: { type: String,},
    averageSalary: { type: String,},
    location: { type: String, },

})

const Company = new model("Companie", companySchema);

module.exports = Company;