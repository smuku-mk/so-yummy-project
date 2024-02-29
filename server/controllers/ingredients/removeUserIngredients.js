import User from "../../database/models/userSchema.js";

export const removeUserIngredients = async (req, res) => {
    const { userId } = req.params;
    const ingredient  = req.body;

    const user = await User.findByIdAndUpdate(userId, { $pull: { shoppingList: ingredient.ttl } }, {new: true});

    return res.json(user);
};