const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = express.Router();


const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),
    email : zod.email()
})
router.post("/signup",async (req,res)=>{
    const body = req.body;
    const {sucecss} = signupSchema.safeParse(req.body);
    if(!sucecss) {
        return res.status(400).json({
            message : "Email already taken / Incorrect inputs" 
        })
    }

    const existingUser = User.findOne({
        username: req.body.username,
        email : req.body.email
    })

    if(existingUser){
        return res.status(411).json({
            message : "Email already taken/ Incorrect inputs"
        })
    }
    else{
        const dbUser = await User.create(req.body); //HE CODED ONLY (body)
        const token  = jwt.sign({
            userId : dbUser._id
        },JWT_SECRET);
        res.json({
            message : "User created successfully",
            token : token
        })
    }

})


module.exports = router;