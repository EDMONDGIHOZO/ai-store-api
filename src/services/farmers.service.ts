import { Farmer, IFarmer } from "../types/farmer";
import bcrypt from 'bcrypt'
import { FarmerModel } from "../models/farmers.model";
import { CustomerError } from "../utils/customerError";
import { errorManager } from "../config/errorManager";
import { Helpers } from "../helpers/helpers";


class FarmersService {
    async createFarmerProfile(user_id: string, land_size: number): Promise<IFarmer> {
        const farmer = new FarmerModel({ user: user_id, land_size });
        const saved_farmer = await farmer.save();
        return saved_farmer.toObject()
    }

    async getFarmerProfile(userId: string): Promise<IFarmer | null> {
        return await FarmerModel.findOne({ user: userId });
    }
}

export default new FarmersService();