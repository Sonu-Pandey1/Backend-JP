const express = require("express");
const authControllers = require("../Controllers/auth-Controller.js")
const signupSchema = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js")
const authMiddleware = require("../middlewares/auth-Middleware.js")

const router = express.Router();


// crate a route using router file 1 st way
// router.get('/',(req,res)=>{
// res.status(200).send("route from router")
// });


// crate a route using router file 2 st way usefull way 

router.route('/').get(authControllers.home);
router.route('/login').post(authControllers.login);
router.route('/register').post(validate(signupSchema), authControllers.register);
router.route('/user').get(authMiddleware,authControllers.user);

module.exports = router;