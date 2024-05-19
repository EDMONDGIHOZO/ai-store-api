import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import "../config/passport_config"; // Import the passport configuration

const authMiddleware = {
    authenticateJwt: (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('jwt', { session: false }, (err: any, user: { userId: string; role: "admin" | "farmer"; } | undefined) => {
            if (err) return next(err); // Handle authentication errors
            if (!user) return res.status(401).json({ error: 'Unauthorized' });
            req.user = user;
            next();
        })(req, res, next);
    },
};

export default authMiddleware;
