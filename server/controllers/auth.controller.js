import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const generateToken = (user) => {
    const token = jwt.sign(user, process.env.JWT_CLIENT_SECRET);
    return token;
}

export const signupUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: 'User with this email already exist!'
            })
        }
        if(!email.includes('@') || !email.includes('.com')){
            return res.status(404).json({
                success: false,
                message: 'Email is not valid!'
            })
        }
        if(password.includes(' ')){
            return res.status(404).json({
                success: false,
                message: 'User password should not contains empty space!!'
            })
        }
        if(password.length < 6){
            return res.status(404).json({
                success: false,
                message: 'User password should be atleast 6 characters!!'
            })
        }
        const user = await User.create({ name, email, password, role });
        const userObj = {
            _id: user._id,
            role: user.role
        }
        const token = generateToken(userObj);
        res.status(200).json({
            success: true,
            token,
            message: 'Successfuly signedup'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.status(404).json({
                success: false,
                message: "User doesn't exist!"
            })
        }
        if(existingUser.password !== password){
            return res.status(401).json({
                success: false,
                message: "Incorrect password!"
            })
        }
        const userObj = {
            _id: existingUser._id,
            role: existingUser.role
        }
        const token = generateToken(userObj);
        res.status(200).json({
            success: true,
            token,
            message: 'Successfuly loggedin!'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}