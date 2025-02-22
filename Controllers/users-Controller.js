const Candidate = require("../utils/Models/Candidate.model")
const Company = require("../utils/Models/Company.modal")
const Jobs = require("../utils/Models/Jobs-model")

const candidate = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        
        // Check if the array is empty
        if (candidates.length === 0) {
            console.log("Candidate not found");
            return res.status(404).json("No candidates found"); // 404 Not Found is more appropriate
        }

        // If there are candidates, send them in the response
        res.status(200).json(candidates);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error"); // Respond with a server error status
    }
}

const Rcandidate = async (req,res) =>{
    try {
        const {name,email,location,skills,about,img,exprience} = req.body

        const data  = await Candidate.create({name,email,location,skills,about,img,exprience});
        console.log(data)
        res.status(200).json({message:"candidate created successfully",data})
        
    } catch (error) {
        console.log(error)
        
    }
}

const candidateD =  async (req,res) =>{
    try {
        const {_id} = req.body
        console.log(req.body)

        const data  = await Candidate.findByIdAndDelete({_id});
        console.log(data)
        res.status(200).json({message:"candidate deleted successfully",data})
        
    } catch (error) {
        console.log(error)
        
    }
}

const company =async (req,res) =>{
   
    try {
        const candidates = await Company.find();
        
        // Check if the array is empty
        if (candidates.length === 0) {
            console.log("Companys not found");
            return res.status(404).json("No companys found"); // 404 Not Found is more appropriate
        }

        // If there are candidates, send them in the response
        res.status(200).json(candidates);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error"); // Respond with a server error status
    }
}




const jobs = async (req,res) =>{
    try {
        const jobs = await Jobs.find();
        
        // Check if the array is empty
        if (jobs.length === 0) {
            console.log("jobs not found");
            return res.status(404).json("No jobs found"); // 404 Not Found is more appropriate
        }

        // If there are candidates, send them in the response
        res.status(200).json(jobs);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error"); // Respond with a server error status
    }
}

module.exports = {candidate,company,jobs,Rcandidate,candidateD};