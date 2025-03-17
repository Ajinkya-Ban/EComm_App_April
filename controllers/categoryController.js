import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    //check validation
    if (!name) {
      return res.status(401).send({
        message: "Name is required",
      });
    }

    //check the category name already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "This category name is already exists",
      });
    }

    // save new name into the model
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    return res.status(201).send({
      success: true,
      message: "New category added",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "something went wrong",
    });
  }
};

// bussiness logic for update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "category updated",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while updating category",
      error,
    });
  }
};

// bussiness logic for get all category
export const getAllCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All category List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// bussiness logic for get single category

export const getSingleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "get single category successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single category",
    });
  }
};

// bussiness logic for deleting category

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params.id;
    const category = await categoryModel.deleteOne({ id });
    res.status(200).send({
      success: true,
      category,
      message: "deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting category",
    });
  }
};
