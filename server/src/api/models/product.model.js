import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
    {
        productCode: {
            type: String,
            required: true,
            unique: true
        },
        batchCode: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        },
        buyPrice: {
            type: Number,
            required: true,
            min: 0
        },
        sellPrice: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model('Product', productSchema);
