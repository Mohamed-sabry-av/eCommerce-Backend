const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const upload = require('../config/multer.config');

router.post("/", upload.single("image"), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.delete('/:id',productController.deleteProducts)
router.put('/:id',productController.editProducts)

module.exports = router;
