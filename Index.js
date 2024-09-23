const express = require("express");
const authRouter = require("./Routers/auth-Router");
const usersRouter  = require("./Routers/users-Router")
const connectDB = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware")
const contactRouter = require("./Routers/contact-Router")
const cors = require("cors")


const app = express()
let PORT = 5000

// ? instant od cors i use proxy in frontend
// const corsOptions = {
//     origin:"http://localhost:5173",
//     methods:"GET , POST, PUT, DELETE, PATCH,HEAD",
//     Credential:true,
// };

// app.use(cors(corsOptions));


app.use(express.json());

// routes are rendering here 
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/users",usersRouter)

// error middleware
app.use(errorMiddleware);


connectDB().then(()=>{
    app.listen(PORT ,()=>{
        console.log(`app listining on port : ${PORT}`)
    })
    console.log("db connected")

})



