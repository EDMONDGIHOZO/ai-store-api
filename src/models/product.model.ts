import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: false },
        application_rate: { type: Number, required: true },
        compatibility: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        status: {
            type: String,
            enum: ['In-stock', 'Out-of-stock'],
            default: 'In-stock'
        },
    },
    {
        timestamps: true
    }
)

const ProductModel = mongoose.model('Product', productSchema)
export { ProductModel }