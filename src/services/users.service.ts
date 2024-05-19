import { UserModel } from "../models/user.model";
import { IUser } from "../types/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CustomerError } from "../utils/customerError";
import { errorManager } from "../config/errorManager";



const userService = {
    async register(fullname: string, phone_number: string, password: string): Promise<IUser> {
        const hashed_password = await bcrypt.hash(password, 12);
        const user = new UserModel({ fullname, phone_number, password: hashed_password })

        try {
            const saved_user = await user.save()
            return saved_user.toJSON()
        } catch (error) {
            throw new CustomerError(errorManager.INTERNAL_SERVER_ERROR)
        }
    },
    async loginUser(phone_number: string, password: string): Promise<string> {
        const user = await UserModel.findOne({ phone_number });
        if (!user) throw new CustomerError(errorManager.WRONG_CREDENTIALS); // Unauthorized
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new CustomerError(errorManager.WRONG_CREDENTIALS);

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return token;
    },
}

export {userService}