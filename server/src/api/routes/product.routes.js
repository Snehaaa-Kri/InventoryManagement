import express from 'express'
import productController from '../controllers/product.controllers.js'

const router = express.Router();

console.log(productController);
// Protected Routes - jwt validation will be needed.
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProductByIdentifier);

// Public Routes
router.get('/:id', productController.getProductByIdentifier);
router.get('/', productController.getAllProducts);

export default router;