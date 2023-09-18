const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const { User } = require("../models/user.model");

const login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.find({email});
        if(user.length){
            const bc=bcrypt.compareSync(password,user[0].password);
            if(bc){
                console.log(user[0])
                const token=jwt.sign({id:user[0]._id},"ssj");
                res.send({msg:"User has been logged in successfully",token});
            }else{
                res.send({msg:"password doesn't match"})
            }
        }else{
            res.send({msg:"Email and password doesn't match"})
        }
    } catch (error) {
        res.send({msg:"error",error:error.message})
    }
}

const register=async (req,res)=>{
    const {name,email,password}=req.body;
    try {
        const users=await User.find({email});
        if(!users.length){
            const hashedPassword=bcrypt.hashSync(password,5);
            const newUser=new User({name,email,password:hashedPassword});
            await newUser.save();
            res.status(201).json({msg:"User has been registered successfully",user:newUser});
        }else{
            res.status(400).json({msg:"Email is already registered"})
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports={register,login}