import { Product } from '../models/product.model.js'

const productController = {
    createProduct: async (req, res) => {
        try {
            const {
                productCode,
                batchCode,
                productName,
                quantity,
                buyPrice,
                sellPrice
            } = req.body;

            // Basic input validation
            if (!productCode || !batchCode || !productName || !quantity || !buyPrice || !sellPrice) {
                return res.status(400).json({ message: 'All fields are required.' });
            }

            // Checking if productCode already exists
            const existingProduct = await Product.findOne({ productCode });
            if (existingProduct) {
                return res.status(409).json({ message: 'Product with this productCode already exists.' });
            }

            const newProduct = new Product({
                productCode,
                batchCode,
                productName,
                quantity: quantity || 0,
                buyPrice: buyPrice || 0,
                sellPrice: sellPrice || 0
            });

            const savedProduct = await newProduct.save();

            res.status(201).json({ message: 'Product created successfully', product: savedProduct });
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { productCode, batchCode, productName, quantity, buyPrice, sellPrice } = req.body;

            // Check if product exists
            const existingProduct = await Product.findById(id);
            if (!existingProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found',
                });
            }

            // Update fields if provided
            if (productCode) existingProduct.productCode = productCode;
            if (batchCode) existingProduct.batchCode = batchCode;
            if (productName) existingProduct.productName = productName;
            if (typeof quantity === 'number') existingProduct.quantity = quantity;
            if (typeof buyPrice === 'number') existingProduct.buyPrice = buyPrice;
            if (typeof sellPrice === 'number') existingProduct.sellPrice = sellPrice;

            await existingProduct.save();

            return res.status(200).json({
                success: true,
                message: 'Product updated successfully',
                product: existingProduct,
            });
        } catch (err) {
            console.error('Error updating product:', err);
            return res.status(500).json({
                success: false,
                message: 'Failed to update product. Try again!',
            });
        }
    },
    deleteProductByIdentifier: async (req, res) => {
        try {
            const { id } = req.params;

            // Check if the product exists
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found',
                });
            }

            await Product.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully',
                deletedProduct: product,
            });
        } catch (err) {
            console.error('Error deleting product:', err);
            return res.status(500).json({
                success: false,
                message: 'Failed to delete product. Try again!',
            });
        }
    },
    getProductByIdentifier: async (req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: "product id is required."
                })
            }

            const requiredProduct = await Product.findById(id);
            if (!requiredProduct) {
                return res.status(200).json({
                    success: true,
                    message: "No Product exists with this product Id"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Product fetched successfully",
                data: requiredProduct
            })
        }
        catch (err) {
            console.log("Error fetching product by id: ", err);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch product by id.Try Again!"
            })
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const allProducts = await Product.find();  //array of products
            if (allProducts.length === 0) {
                return res.status(200).json({
                    success: true,
                    message: "No Products found."
                })
            }
            return res.status(200).json({
                success: true,
                message: "All products fetched successfully!",
                data: allProducts
            })
        }
        catch (err) {
            console.log("Error fetching alerts: ", err);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch products.Try Again!"
            })
        }
    },
}

export default productController;