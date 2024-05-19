import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models/user.model';
import { Document, Types } from 'mongoose';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET, // Make sure to set your JWT secret in the environment
};

passport.use(
    new JwtStrategy(opts, async (jwtPayload: { user_id: any; }, done: (arg0: unknown, arg1: boolean | (Document<unknown, {}, { createdAt: NativeDate; updatedAt: NativeDate; } & { full_name: string; phone_number: string; password: string; role: "admin" | "farmer"; }> & { createdAt: NativeDate; updatedAt: NativeDate; } & { full_name: string; phone_number: string; password: string; role: "admin" | "farmer"; } & { _id: Types.ObjectId; })) => any) => {
        try {
            const user = await UserModel.findById(jwtPayload.user_id);
            if (!user) {
                return done(null, false); // User not found
            }
            return done(null, user); // Success: attach user object to the request
        } catch (err) {
            return done(err, false);
        }
    })
);
