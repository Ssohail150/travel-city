const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try{
        const { name, email, password, role} = req.body;
        const existUser = await User.findOne({email});

        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already registerd",
                data: null,
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            role
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: null,
        });
    }
};


module.exports = {signup,}