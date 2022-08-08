import { Product } from "../models";

export const getAllProductsFromdb = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ response: products, success: true });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export const createNewProduct = async (req, res) => {
	try {
		const productData = req.body;
		const newProduct = new Product(productData);
		const addedProductFromDb = await newProduct.save();
		res.status(201).json({ response: addedProductFromDb, success: true });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const getProductByIdFromDb = async (req, res) => {
	try {
		const productId = req.params;

		const product = await Product.findById({ _id: productId.id });
		if (product) {
			res.status(200).json({ response: product, success: true });
		} else {
			res.status(404).json({ success: false, message: 'Product not found' });
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};