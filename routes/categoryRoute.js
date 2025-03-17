import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getSingleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

// import { rateLimit } from "express-rate-limit";

// // here we can use throttling concept to protect our endpoint. The following code restrict the user to
// // hit the endpoint in day for 3 times.
// const limiter = rateLimit({
//   windowMs: 24 * 60 * 60 * 1000,
//   limit: 3,
//   message: "To many request send",
//   legacyHeaders: false,
// });

const router = express.Router();
// create new category route

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// route for update-category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// route for get all category
router.get("/all-category", limiter, getAllCategoryController);

// get a single category by slug
router.get("/single-category/:slug", getSingleCategoryController);

// create delete route for category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
