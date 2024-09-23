
const Contact = require("../utils/Models/Contact.model");

const contactForm = async (req,res) => {

    try {
        const response = req.body;
        console.log("response form backend",response)
        await Contact.create(response);
        return res.status(200).json({message:"message send successfully"})

        
    } catch (error) {
        return res.status(500).json({message:"messagenot deliverd"})
        
    }
}

module.exports = contactForm;