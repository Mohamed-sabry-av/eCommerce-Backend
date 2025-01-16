const ProductModel = require("../models/ProdectModel");

exports.createProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }
        req.body.image = req.file.filename;

        const product = await ProductModel.create(req.body);
        res.status(201).json(product); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        if (!id) {
            return res.status(400).json({ error: "Product ID is required" });
        }

        const editProducts = await ProductModel.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });
        if (editProducts) {
            res.status(200).json(editProducts);
        } else {
            return res.status(404).json({ error: "Product not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "Product ID is required" });
        }

        const delProduct = await ProductModel.deleteOne({ _id: id });
        if (delProduct.deletedCount === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
