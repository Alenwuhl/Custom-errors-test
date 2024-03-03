import { Router } from "express";
import { getAllProducts, saveProduct } from "../controllers/products.controller.js";
import { generateProductErrorInfo } from "../services/errors/product-creation-error.message.js";
import EErrors from "../services/errors/errors-enum.js";
import CustomError from "../services/errors/CustomError.js";


const router = Router();

router.get("/mockingproducts’", async(req, res) => {
   const products = await getAllProducts()
   res.json(products)
});
+
router.post("/", async(req, res) => {
    const {title, description, price} = req.body;
    if (!title || !description || !price) {
        CustomError.createError({
            name: "Product Create Error",
            cause: generateProductErrorInfo({ title, description, price }),
            message: "Error tratando de crear al producto",
            code: EErrors.INVALID_PRODUCT_DATA
        })
    }
    const result = await saveProduct(req.body)
    res.json(result)
});

export default router;