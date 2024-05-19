import { Farmer, IFarmer } from "../types/farmer";
import bcrypt from 'bcrypt'
import { FarmerModel } from "../models/farmers.model";
import { CustomerError } from "../utils/customerError";
import { errorManager } from "../config/errorManager";
import { Helpers } from "../helpers/helpers";


class FarmersService {
    async createFarmerProfile(land_size: number, user_id?: string): Promise<IFarmer> {
        const farmer = new FarmerModel({ user: user_id, land_size });
        const saved_farmer = await farmer.save();
        return saved_farmer.toObject()
    }

    async getFarmerProfile(userId?: string): Promise<IFarmer | null> {
       if(userId) {
           return await FarmerModel.findOne({ user: userId });
       } else {
        return null
       }
    }
}

export default new FarmersService();