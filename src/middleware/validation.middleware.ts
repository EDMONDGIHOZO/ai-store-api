
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateFarmerInput = [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('phone_number').notEmpty().withMessage('Phone number is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('land_size').isNumeric().withMessage('Land size should be a number'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];