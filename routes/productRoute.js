import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware";
import {
  createProductController,
  getAllProductController,
  getSingleProductController,
  updateProdcutController,
} from "../controllers/productController";

const router = express.Router();

//add new product
router.post("/create-product", requireSignIn, isAdmin, createProductController);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  updateProdcutController
);

// get all product
router.get("/get-product", getAllProductController);

// get single product by slug
router.get("/get-product/:slug", getSingleProductController);

// get photo by id
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/product/:id", deleteProductController);

export default router;
