import { faker } from "@faker-js/faker";
import productModel from "./daos/product.model.js";
import CustomError from "./errors/CustomError.js";
import { generateProductErrorInfo } from "./errors/product-creation-error.message.js";
import EErrors from "./errors/errors-enum.js";

export default class ProductService {
  getAll = async () => {
    try {
      console.log("product.service - gettAll");
      const products = await productModel.find();
      return products;
    } catch (error) {
      console.error(error);
      throw new Error("No se pudo obtener los productos.");
    }
  };

  save = async (product) => {
    try {
      if (!product) {
        throw new CustomError({
          name: "Product Create Error",
          cause: generateProductErrorInfo({ title, description, price }),
          message: "Error tratando de crear al producto",
          code: EErrors.INVALID_PRODUCT_DATA
        });
      }
      let result = await productModel.create(product);
      return result;
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      return error;
    }
  };

  createTheProductsList = async () => {
    try {
      for (let i = 0; i < 100; i++) {
        const product = {
          title: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(),
        };
        const result = await this.save(product);
      }
      console.log("Se han guardado 100 productos en la base de datos");
      return;
    } catch (error) {
      console.error("Error al guardar los productos:", error);
    }
  };
}
