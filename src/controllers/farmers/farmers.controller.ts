import { Request, Response, NextFunction } from "express";
import FarmersService from "../../services/farmers.service";

class FarmersController {
    async createFarmer(req: Request, res: Response, next: NextFunction):Promise<void> {
        
        try {
            const results = await FarmersService.createFarmer(req.body)
            res.status(201).json(results)
        } catch(e:unknown) {
            let errorMessage = 'An error occurred';
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            res.status(500).json({error: errorMessage})
        }
    }
}


export default new FarmersController()