import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const authorize = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        const token = authorization && authorization.split(' ').pop();
        
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized user!"
            })
        }

        const dcryptedUser = jwt.verify(token, process.env.JWT_CLIENT_SECRET);
        if(!dcryptedUser){
            return res.status(401).json({
                success: false,
                message: "Invalid token!"
            })
        }

        const user = await User.findOne({ _id: dcryptedUser._id });
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Token expired!"
            })
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}