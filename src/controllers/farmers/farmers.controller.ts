import { Response } from 'express';
import { Request } from '../../types';
import farmersService from '../../services/farmers.service';

const farmerController = {
    async createProfile(req: Request, res: Response): Promise<void> {
        try {
            const user = req.user;
            const { land_size } = req.body;
            const farmer = await farmersService.createFarmerProfile(land_size, user?.user_id);
            res.status(201).json({ message: 'Farmer profile created successfully', farmer });
        } catch (err: any) {
            res.status(err.statusCode || 400).json({ error: err.message });
        }
    },

    async getProfile(req: Request, res: Response): Promise<any> {
        try {
            const user = req.user;
            const farmer = await farmersService.getFarmerProfile(user?.user_id);
            if (!farmer) return res.status(404).json({ error: 'Farmer profile not found' });
            res.json(farmer);
        } catch (err: any) {
            res.status(err.statusCode || 500).json({ error: err.message });
        }
    },
};

export default farmerController;
