import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categories: { type: [String], required: true },
  availability: { type: Boolean, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;