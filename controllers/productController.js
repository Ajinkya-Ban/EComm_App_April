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

export const updateProdcutController = () => {};

// bussiness logic get all prodcut

export const getAllProductController = () => {};

//bussiness logic for get single product
export const getSingleProductController = () => {};

export const productPhotoController = () => {};

export const deleteProductController = () => {};
