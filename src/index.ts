import {createServer} from "http";
import {app} from "./app";
import {variables} from "./config/variables";

const httpServer= createServer(app)
const port = variables.port
httpServer.listen(port, () => console.log(`The server is running on ${port}`))