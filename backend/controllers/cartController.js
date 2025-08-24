import userModel from '../models/userModel.js';

// Add to cart
const addToCart = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.json({ success: false, message: "Authentication required." });
        }
        const userId = req.user.id; 

        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: "User not found." });
        }

        let cartData = userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        res.json({ success: false, message: "Error adding to cart." });
    }
};

// Remove from cart
const removeFromCart = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.json({ success: false, message: "Authentication required." });
        }
        const userId = req.user.id; 

        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: "User not found." });
        }

        let cartData = userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Removed From Cart" });
    } catch (error) {
        res.json({ success: false, message: "Error removing from cart." });
    }
};

// Get cart
const getCart = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.json({ success: false, message: "Authentication required." });
        }
        const userId = req.user.id; 

        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.json({ success: false, message: "User not found." });
        }

        let cartData = userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        res.json({ success: false, message: "Error getting cart." });
    }
};

export {
    addToCart,
    removeFromCart,
    getCart
};
