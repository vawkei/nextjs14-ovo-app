"use server";

import {signIn,signOut} from "@/auth";
import { redirect } from "react-router-dom";

export async function doSocialLogin(formData){
    const action = formData.get("action");
    await signIn(action, {redirectTo:"/home"});
};

export async function doLogout(){
    await signOut({redirectTo:"/"})
};

export async function doCredentialLogin(formData){
    console.log("formData",formData);

    try{
        const response = await signIn("credentials",{
            email:formData.email,
            password:formData.password,
            redirect:false
        });
        return response;
    }catch(error){
        console.log(error)
        throw error
    }
}