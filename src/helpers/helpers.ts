import * as mongoose from "mongoose";

export class Helpers {
    static toMongooseObjectId(value: any) {
        try {
            if (typeof value == 'string') {
                return new mongoose.Types.ObjectId(value)
            }
            return value;
        } catch (error) {
            return value;
        }
    }
}
