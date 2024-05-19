import express from 'express';
import { validationResult } from 'express-validator';
import { validateFarmerInput } from '../middleware/validation.middleware';
import farmersController from '../controllers/farmers/farmers.controller';

const router = express.Router()

// self create the farmer account.
router.post('/', validateFarmerInput, farmersController.createFarmer)
//TODO: we need to get the farmer id from session details.
router.post('/profile', validateFarmerInput, farmersController.getFarmer) 
