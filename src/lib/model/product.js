import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
  name: String,
  lastName: String,
  className: String,
  subject: String,
});

export const Product =
  mongoose.models.products || mongoose.model('products', productModel);
