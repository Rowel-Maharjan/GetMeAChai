import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github"
import mongoose from 'mongoose';
import Userinfo from '@/app/models/user.model';

const authoptions = NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                //Connect to the database
                await mongoose.connect("mongodb://localhost:27017/GetMeAChai")
                    .then(async () => {
                        console.log("Connection Successful");
                        const currentUser = await Userinfo.findOne({ email: user.email });

                        if (!currentUser) {
                            const newUser = await Userinfo.create({
                                email: user.email,
                                username: user.name
                            })
                            user.name = newUser.username
                        }
                        else{
                            user.name = currentUser.username
                        }
                    })
                    .catch(() => {
                        console.log("Connection Error")
                    })
            }
            return true; //Needed to sign in
        },
        // async session({ session, user, token }) {
        //     const dbuser = await Userinfo.findOne({ email: session.user.email })
        //     session.user.name = dbuser.username
        //     return session
        // }

    }
})

export { authoptions as GET, authoptions as POST }