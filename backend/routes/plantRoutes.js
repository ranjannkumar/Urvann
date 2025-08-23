import express from 'express';
import { getPlants, addPlant, getCategories } from '../controllers/plantController.js';

const router = express.Router();

router.get('/', getPlants);
router.post('/', addPlant);
router.get('/categories', getCategories);

export default router;