import genToken from '../middlewares/auth.middleware.js'
import { User } from '../models/user.model.js'
import bcrypt from 'bcryptjs'
const signup = async (req, res)=>{
    try {
       const {fullName, email, password} =req.body
       const existUser = await User.findOne({email})

       if(existUser){
        return res.status(401).json({message: "User already exists!"})
       }

       const hashedPass = await bcrypt.hash(password, 10)

       const user = await User.create({
        fullName,
        email,
        password: hashedPass
       })

       const token = genToken(user._id)
       res.cookie("token", token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge : 7*24*60*60*1000
       })

       return res.status(201).json(user)


    } catch (error) {
       return res.status(400).json({message: `Signup error: ${error}`}) 
        
    }
}

const login = async (req, res)=>{
   try {
       const {email, password} =req.body
       const user = await User.findOne({email}).populate("listing", " title image1 image2 image3 description rent category city landmark ")

       if(!user){
        return res.status(401).json({message: "User does not exist"})
       }

       const isMatch = await bcrypt.compare(password, user.password)

       if(!isMatch){
         return res.status(401).json({message: "Incorrect password or email"})
       }

       const token = genToken(user._id)
       res.cookie("token", token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge : 7*24*60*60*1000
       })

       return res.status(200).json(user)


    } catch (error) {
       return res.status(500).json({message: `Login error: ${error}`}) 
        
    }
}

const logout= async(req, res)=>{
   try {
      res.clearCookie("token")
      return res.status(200).json({message: "user logged out successfully!"})
   } catch (error) {
      res.status(500).json({message: `login error: ${error}`})
   }
}

export {signup, login, logout}