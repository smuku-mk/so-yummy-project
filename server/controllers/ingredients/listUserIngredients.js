import User from "../../database/models/userSchema.js";

export const listUserIngredients = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.json(user.shoppingList);
    };
