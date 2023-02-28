
import User from '../models/user.model.js';

export const getData = async (req, res) => {   
    try {
        const user = req.user;
        const role = user.role;
        if(role === 'user'){
            const data = {
                name: user.name,
                email: user.email,
                password: user.password
            }
            return res.status(200).send({
                success: true,
                message: 'Successful!',
                dashboard: 'user',
                data
            })
        }

        if(role === 'admin'){
            let data = await User.find({});
            data = data.filter((userData ) => userData._id != user._id );
            data = data.map((userData) => {
                return ({
                    _id: userData._id,
                    name: userData.name,
                    role: userData.role
                })
            })

            return res.status(200).send({
                success: true,
                message: 'Successful!',
                dashboard: 'admin',
                data
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}