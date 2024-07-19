import {auth} from "./auth";

export default auth((req)=>{
    // console.log("ROUTE: God please help me land a job")
    const isLoggedIn = !!req.auth;
    console.log("ROUTE:",req.nextUrl.pathname)
    console.log("isLoggedIn:",isLoggedIn)
});

export const config ={
    // matcher:["/auth/login","/auth/register"]
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}