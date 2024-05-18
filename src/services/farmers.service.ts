import { Farmer } from "../types/farmer";
import bcrypt from 'bcrypt'
import { FarmerModel } from "../models/farmers.model";
import { CustomerError } from "../utils/customerError";
import { errorManager } from "../config/errorManager";


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
        const hashedPassword = await bcrypt.hash(formData.password, 10) // should have a secret in public application.
        const newFarmer = new FarmerModel({
            ...formData,
            password: hashedPassword
        })
        const saved = await newFarmer.save()

        return saved.toJSON()
    }
}

export default new FarmersService();