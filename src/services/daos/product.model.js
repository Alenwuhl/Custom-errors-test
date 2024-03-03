import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Crear el modelo de Producto
const Product = mongoose.model('productModel', productSchema);

export default Product
