import User from '../../database/models/userSchema.js';

export const addUserIngredient = async (req, res) => {
    const { userId } = req.params;
    const ingredient = req.body;

    const user = await User.findByIdAndUpdate(userId, { $push: { shoppingList: ingredient.ttl } }, { new: true });

    return res.json(user);
};