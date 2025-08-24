import Plant from '../models/plantModel.js';

// Function to fetch all plants with search and filter
const getPlants = async (req, res) => {
  try {
    const { name, category } = req.query;
    let query = {};

    if (name) {
      const regex = new RegExp(name, 'i');
      query.$or = [{ name: regex }, { categories: regex }];
    }

    if (category && category !== 'All') { // Updated logic to handle "All" category
      query.categories = category;
    }

    const allPlants = await Plant.find(query);
    res.json({success: true, data: allPlants});
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
    const categories = await Plant.distinct('categories');
    res.json({success: true, data: categories});
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};


export {
  getPlants,
  addPlant,
  getCategories,
};