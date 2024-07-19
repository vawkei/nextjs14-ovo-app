// import NextAuth from "next-auth";
// // import github from "next-auth/providers/github";
// // import Github from "next-auth/providers/github";
// import authConfig from "@/auth.config";
// import { Adapter } from "next-auth/adapters";
// import { User } from "./models/user";

// export const {handlers: { GET, POST },auth,} = NextAuth({
// //   providers: [Github],

// ...authConfig
// });

//mongoose-adapter.js:
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "./models/user";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {
        email:{},
        password:{} ,
      },
      async authorize(credentials) {
        if (credentials === null) {
          return null;
        }
        try {
          const user = await User.findOne({ email: credentials?.email });
          console.log(user);
            
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password isn't correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),

    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        authorization:{
            params:{
                prompt:"consent",
                access_type:"offline",
                response_type:"code"
            },
        },
    }),
    GitHubProvider({
        clientId:process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET,
        authorization:{
            params:{
                prompt:"consent",
                access_type:"offline",
                response_type:"code",
            },
        },
    }),
  ],
});
























//Had some issues with the typescript: auth.ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

// import { User } from "./models/user";
// import bcrypt from "bcryptjs";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   session: { strategy: "jwt" },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null;
//         }
//         try {
//           const user = await User.findOne({ email: credentials.email }).exec();
//           console.log(user);

//           if (!user || typeof user.password !== 'string') {
//             throw new Error("User not found or invalid password format");
//           }

//           const isMatch = await bcrypt.compare(
//             credentials.password as string,
//             user.password
//           );

//           if (isMatch) {
//             return user;
//           } else {
//             throw new Error("Email or Password isn't correct");
//           }
//         } catch (error) {
//           if (error instanceof Error) {
//             throw new Error(error.message);
//           } else {
//             throw new Error("An unexpected error occurred");
//           }
//         }
//       },
//     }),

//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),

//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// });

