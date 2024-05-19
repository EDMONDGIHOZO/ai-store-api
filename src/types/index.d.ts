export interface Request {
    body: { land_size: any; };
    user?: {
        user_id: string;
        role: 'admin' | 'farmer';
    };
}