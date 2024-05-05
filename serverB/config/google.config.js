import googleOAuth from "passport-google-oauth20"
import { UserModel } from "../Schema/allModels.js"

const GoogleStrategy = googleOAuth.Strategy

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL : "http://localhost:3000/auth/google/callback"
        },
        async(accessToken, refreshToken, Profile, done)=>{
            //  Creating a new user
            const newUser = {
                fullname : Profile.displayName,
                email : Profile.emails[0].value,
                profilePic : Profile.photos[0].value
            };
            try {
                //Check weather user exist or not
                const user = await UserModel.findOne({email: newUser.email});
                if(user){
                    //  Generating jwt token
                    const token = user.generateJwtToken();
                    done(null, {user, token});
                }
                else{
                    //  creating new user
                    const user = await UserModel.create(newUser);
                    //  Generating jwt token
                    const token = user.generateJwtToken();
                    // return user
                    done(null, {user, token})
                }
            } catch (error) {
                done(error, null);
            }
        }
        )
    );

    passport.serializeUser((userData, done) => done(null, {...userData}))
    passport.deserializeUser((id, done)=> done(null,id))
}