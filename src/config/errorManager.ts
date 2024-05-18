

export const errorManager = {
    FARMER_EXISTS: {
        responseCode: 'FARMER_EXISTS',
        message: 'A farmer with this phone number already exists',
        code: 400,
    },
    INTERNAL_SERVER_ERROR: {
        responseCode: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
        code: 500,
    },
}