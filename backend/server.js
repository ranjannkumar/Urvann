import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import plantRoutes from './routes/plantRoutes.js';
import plantData from './data/plants.js'; 
import Plant from './models/plantModel.js';
import cartRouter from './routes/cartRoute.js';
import userRouter from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI;
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    seedDatabase();
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Seeding the database with initial data
async function seedDatabase() {
  try {
    const count = await Plant.countDocuments();
    if (count === 0) {
      await Plant.insertMany(plantData);
      console.log('Database seeded with initial plant data.');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

app.use('/images', express.static(path.join(__dirname, 'uploads')));

// Use the plant and cart routes
app.use('/api/plants', plantRoutes);
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});