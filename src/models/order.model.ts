import * as mongoose from "mongoose";


const Schema = mongoose.Schema


const orderSchema = new Schema(
    {
        id: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)