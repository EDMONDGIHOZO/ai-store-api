import * as mongoose from "mongoose";
import {variables} from "../config/variables";


export class Connection {

    static mongoConnection:typeof mongoose | null = null
    static async connectToMongo () {
        try {
            Connection.mongoConnection = await mongoose.connect(variables.mongo.uri, {autoIndex: true})
        } catch (error) {
            console.log("Error connecting to mongo")
            console.log(error)
        }
    }
}