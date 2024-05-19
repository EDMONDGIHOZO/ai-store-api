import * as mongoose from "mongoose";


const Schema = mongoose.Schema

const orderSchema = new Schema(
   {
        farmer: { type: mongoose.Schema.ObjectId, ref: 'Farmer', required: true },
        products: [{
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 0 }
        }],
        land_size: { type: Number, required: true, min: 0 },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending'
        },
   },
    { timestamps: true }
)

const OrderModel = mongoose.model('Order', orderSchema)
export {OrderModel}