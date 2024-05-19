import { Farmer } from "../types/farmer";
import bcrypt from 'bcrypt'
import { FarmerModel } from "../models/farmers.model";
import { CustomerError } from "../utils/customerError";
import { errorManager } from "../config/errorManager";
import { Helpers } from "../helpers/helpers";


class FarmersService {
    async createFarmer(formData: Farmer): Promise<Farmer> {
        //     check if the same phone number exists.
        const oldFarmer = await FarmerModel.findOne(
            {
                phone_number: formData.phone_number
            }
        )
        if (!oldFarmer) throw new CustomerError(errorManager.FARMER_EXISTS)

        // proceed adding new farmer.
        // hash the password
        const newFarmer = new FarmerModel({
            ...formData
        })
        const saved = await newFarmer.save()
        return saved.toJSON()
    }
    async getFarmeryById(id: string): Promise<Farmer> {
        //     check if the same phone number exists.
        const found = await FarmerModel.findOne(
            {
                _id: Helpers.toMongooseObjectId(id)
            }
        )
        if (!found) throw new CustomerError(errorManager.FARMER_NOT_FOUND)
        return found.toJSON()
    }
}

export default new FarmersService();