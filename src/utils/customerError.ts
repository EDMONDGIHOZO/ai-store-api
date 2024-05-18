import {errorManager} from "../config/errorManager";


export class CustomerError extends Error {
    code: number;
    responseCode: any;

    constructor({ message, responseCode = errorManager.INTERNAL_SERVER_ERROR.responseCode, code = 422}) {
        super(message);
        this.responseCode = responseCode;
        this.message = message;
        this.code = code
    }
}