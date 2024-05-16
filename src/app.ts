import express from "express";
import {Connection} from "./database/connection";
import cors from "cors";

const app = express()

//start the mongodb
Connection.connectToMongo().then(() => {
    console.log("Database is successfully connected.")
});
app.use(cors())

export {app}