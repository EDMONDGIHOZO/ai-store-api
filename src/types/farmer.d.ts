import { IUser } from "./user";


export interface IFarmer {
    user: IUser['_id'];
    landSize: number;
}