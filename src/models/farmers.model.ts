import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const farmerSchema = new Schema(
    {
        first_name: {type: String, required: true},
        phone_number: {type: String, required: true},
        last_name: {type: String, required: false},
        password: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const FarmerModel = mongoose.model('Farmer', farmerSchema)
export {FarmerModel}