import User from "../../database/models/userSchema.js";

export const logOut = async (req, res) => {

    const token = req.headers.authorization.split(" ")[1];

    await User.findOneAndUpdate({ token }, { token: null });
    
    return res.status(200).json({ message: "User logged out successfully" });
};