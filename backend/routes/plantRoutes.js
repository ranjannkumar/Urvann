import express from 'express';
import { getPlants, addPlant, getCategories } from '../controllers/plantController.js';
import authMiddleware from '../middleware/auth.js'; 

const router = express.Router();

// Mock admin middleware for demonstration purposes
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.email === 'admin@urvann.com') {
    next();
  } else {
    return res.status(403).json({ success: false, message: 'Access denied. Admin privileges required.' });
  }
};


router.get('/', getPlants);
router.post('/add', authMiddleware, addPlant); // Protect the addPlant route
router.get('/categories', getCategories);

export default router;
