import * as dotenv from 'dotenv'

try {
    dotenv.config();
} catch (e) {
    console.log("Error while configuring the dotenv", e)
}

const variables = {
    nodEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT || 8000),
    mongo: {
        uri: String(process.env.MONGODB_URI)
    }
}


export {variables}