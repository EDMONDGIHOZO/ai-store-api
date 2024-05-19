import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const farmerSchema = new Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        land_size: {type: Number, required: true, min: 0},
    },
    {
        timestamps: true
    }
)

const FarmerModel = mongoose.model('Farmer', farmerSchema)
export {FarmerModel}