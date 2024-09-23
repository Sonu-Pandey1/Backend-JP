const z = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: " Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters.." })
        .max(255, { message: " Name must not be more then 255 characters." }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(10, { message: "email must be at least 10 characters.." })
        .max(255, { message: " email must not be more then 255 characters." }),
        

    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "password can`t be frater then 1024 characters" }),
});

module.exports = signupSchema;
