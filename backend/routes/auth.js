import express from 'express'
import Users from '../models/authModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router = express.Router()


router.post('/signIn', async(req,res)=>{
    const { email, password } = req.body

    try {
        const signedUser = await Users.findOne({ email })
        
        if(!signedUser) return res.status(404).json({status: false, message: 'Please Sign In'})

        const isPasswordCorrect = await bcrypt.compare(password, signedUser.password)

        if(!isPasswordCorrect) return res.status(404).json({status: false, message: 'Incorrect Password'})

        const token = jwt.sign({email: signedUser.email, id: signedUser._id}, 'amazon', {expiresIn:'3min'})

        res.status(200).json({name: signedUser.name, token})

        
    } catch (error) {

        res.status(500).json(error)
    }
})


router.post('/signUp', async(req,res)=>{
    const { name, email, password, cPassword } = req.body

    try {
        const signedUser = await Users.findOne({ email })

        if(signedUser) return res.status(400).json({ status: false, message: 'User already exist'})

        if(password !== cPassword) return res.status(400).json({ message:"Password doesn't match..." })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await Users.create({ email, password: hashedPassword, name})

        const token = jwt.sign({ email: result.email, id: result._id}, 'amazon', {expiresIn:'1min'})

         res.status(200).json({name: result.name, email: result.email, token})
         
        } catch (error) {
            res.status(500).json(error)
        }  
    })


export default router