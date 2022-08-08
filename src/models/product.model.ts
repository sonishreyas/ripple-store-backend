import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: "Product name is required"
    },
    brand: {
        type: String,
    },
    type: {
        type: String,
    },
    category: {
        type: String,
    },
    imgURL: {
        type: String,
    },
    rating: {
        type: Number
    },
    reviews: {
        type: Number
    },
    price: {
        type: Number,
        required: 'Product price is required'
    },
    mrp: {
        type: Number,
        required: 'Product MRP is required'
    },
    discountPercentage: {
        type: Number,
    },
    discount: {
        type: Number,
    },
});

export const Product = mongoose.model("Product", ProductSchema);