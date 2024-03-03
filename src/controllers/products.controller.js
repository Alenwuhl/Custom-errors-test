import ProductService from "../services/products.service.js";

const productService = new ProductService();

export async function getAllProducts() {
  try {
    console.log("product.controller - createTheProductsList");
    const result = await productService.createTheProductsList();
    console.log("product.controller - gettAllProducts");
    const products = await productService.getAll();
    return products;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo obtener los productos.");
  }
}

export async function saveProduct(product) {
  try {
    console.log("product.controller - saveProduct");
    let result = await productService.save(product);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo guardar el producto.");
  }
}
