import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token;
}
// controller user registration


// POST: /api/users/register
export const registerUser = async(req, res) =>{
    try{
        const {name, email, password} = req.body;

        // check if user already exists
        if(!name || !email || !password){
            return res.status(400).json({message: "Please provide name, email and password"});
        }
        // check if user already exists
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        // create new user

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name, email, password: hashedPassword
        })


    }catch(error){

    }
}