// This file contains the controller logic for plants, including search, filter, and add functionalities.

import Plant from '../models/plantModel.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

// Function to fetch all plants with search and filter
const getPlants = async (req, res) => {
  try {
    const { name, category } = req.query;
    let query = {};

    if (name) {
      // Use a more comprehensive query to search by name or category keyword
      const regex = new RegExp(name, 'i');
      query = {
        $or: [
          { name: { $regex: regex } },
          { categories: { $regex: regex } }
        ]
      };
    }

    if (category && category !== 'All') {
      // Add category filter to the query
      query.categories = category;
    }

    const allPlants = await Plant.find(query);
    res.json({ success: true, data: allPlants });
  } catch (err) {
    console.error("Error fetching plants:", err.message);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Function to add a new plant (Admin Feature)
const addPlant = async (req, res) => {
  try {
    const { name, price, categories, availability, image, description } = req.body;

    // Basic input validation
    if (!name || !price || !categories || typeof availability !== 'boolean' || !image || !description) {
      return res.status(400).json({ success: false, message: 'All fields (name, price, categories, availability, image, description) are required and must be valid.' });
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
    res.status(201).json({ success: true, message: 'Plant added successfully', data: newPlant });
  } catch (err) {
    console.error("Error adding plant:", err.message);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Function to get all unique categories dynamically
const getCategories = async (req, res) => {
  try {
    const categories = await Plant.distinct('categories');
    res.json({ success: true, data: ["All", ...categories] });
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

export {
  getPlants,
  addPlant,
  getCategories,
};
