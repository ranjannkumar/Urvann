// This file is updated to include search and filter logic.
import Plant from '../models/plantModel.js';

// Function to fetch all plants with search and filter
const getPlants = async (req, res) => {
  try {
    const { name, category } = req.query;
    let query = {};

    // Build the query object based on parameters
    if (name) {
      // Use case-insensitive regex for name search
      const regex = new RegExp(name, 'i');
      query.name = { $regex: regex };
    }

    if (category && category !== 'All') {
      // Filter by category if one is provided and it's not "All"
      query.category = category;
    }

    const allPlants = await Plant.find(query);
    res.json({ success: true, data: allPlants });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Function to add a new plant
const addPlant = async (req, res) => {
  try {
    const { name, price, categories, availability, image, description } = req.body;

    // Validate inputs
    if (!name || !price || !categories || typeof availability !== 'boolean' || !image || !description) {
      return res.status(400).json({ message: 'All fields (name, price, categories, availability, image, description) are required and valid.' });
    }

    const newPlant = new Plant({
      name,
      price,
      categories,
      availability,
      image,
      description
    });

    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Function to get all unique categories
const getCategories = async (req, res) => {
  try {
    const categories = await Plant.distinct('category');
    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

export {
  getPlants,
  addPlant,
  getCategories,
};
