import express  from "express";
const router = express.Router();

import { getAllProductsFromdb, createNewProduct, getProductByIdFromDb } from "../controllers";

router.route('/')
.get(getAllProductsFromdb)
.post(createNewProduct);

router.route('/:id')
.get(getProductByIdFromDb);

export {router as products};