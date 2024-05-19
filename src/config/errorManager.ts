

export const errorManager = {
    FARMER_EXISTS: {
        responseCode: 'FARMER_EXISTS',
        message: 'A farmer with this phone number already exists',
        code: 400,
    },

    WRONG_CREDENTIALS: {
        responseCode: 'WRONG_CREDENTIALS',
        message: 'Invalid phone number or password',
        code: 401,
    },

    FARMER_NOT_FOUND: {
        responseCode: 'FARMER_NOT_FOUND',
        message: 'There is no farmer with given ID',
        code: 404,
    },
    INTERNAL_SERVER_ERROR: {
        responseCode: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
        code: 500,
    },
}