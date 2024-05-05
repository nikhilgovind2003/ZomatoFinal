import {UserModel} from "../Schema/allModels.js";
import passportJwt from "passport-jwt"
// import passport from "passport"

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'ZomatoApp'
}

const model = (passport)=>{
    UserModel(
        new JwtStrategy(opts, async(jwt_payload, done)=>{
            try {
                const doesUserExist = UserModel.findById(jwt_payload.user)
                if (doesUserExist) {
                    return done(null, null, doesUserExist);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                throw new Error(error)
            }
        })
    )
}
export default model