import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        full_name: { type: String, required: true },
        phone_number: { type: String, required: true },
        password: { type: String, required: true },
        role: {type: String, enum: ['admin', 'farmer'], default: 'farmer'}
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model('User', userSchema)
export { UserModel }