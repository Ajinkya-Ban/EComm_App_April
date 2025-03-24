import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

// bussiness logic add new product
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;

    // validations
    switch (true) {
      case !name:
        return res.status(400).send({ message: "Name is requred" });
      case !description:
        return res.status(400).send({ message: "description is requred" });
      case !price:
        return res.status(400).send({ message: "enter the price" });
      case !category:
        return res.status(400).send({ message: "category is requred" });
      case !quantity:
        return res.status(400).send({ message: "quantity is requred" });
      case photo && photo.size > 100000:
        return res.status(400).send({ error: "please upload photo upto 1MB" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "one product added successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// bussiness logic for update product

export const updateProdcutController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;

    // validations
    switch (true) {
      case !name:
        return res.status(400).send({ message: "Name is requred" });
      case !description:
        return res.status(400).send({ message: "description is requred" });
      case !price:
        return res.status(400).send({ message: "enter the price" });
      case !category:
        return res.status(400).send({ message: "category is requred" });
      case !quantity:
        return res.status(400).send({ message: "quantity is requred" });
      case photo && photo.size > 300000:
        return res.status(400).send({ error: "please upload photo upto 1MB" });
    }
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "one product updated successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// bussiness logic get all prodcut
export const getAllProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      products,
      Total_Product: products.length,
      message: "All product list",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

//bussiness logic for get single product
export const getSingleProductController = async (req, res) => {
  try {
    const products = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      products,
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

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "something went wrong",
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const prodcut = await productModel
      .findByIdAndDelete(req.params.id)
      .select("-photo");
    res.status(200).send({
      success: true,
      message: "Data deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Something went wrong",
    });
  }
};
