import { Request, Response } from 'express';
import { userService } from '../../services/users.service';

const userController = {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const { fullname, phone_number, password } = req.body;
            const user = await userService.register(fullname, phone_number, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (err: any) {
            res.status(err.statusCode || 400).json({ error: err.message });
        }
    },

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { phone_number, password } = req.body;
            const token = await userService.loginUser(phone_number, password);
            res.json({ token });
        } catch (err: any) {
            res.status(err.statusCode || 401).json({ error: err.message });
        }
    },
};

export default userController;