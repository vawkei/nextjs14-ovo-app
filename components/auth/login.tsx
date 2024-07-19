"use client";

import React, { useState } from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import Link from "next/link";
import {doCredentialLogin} from "../../app/actions/index"
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [error,setError] = useState<string>("")


  const router = useRouter();

  const enteredEmailOnchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(e.target.value);
  };
  const enteredPasswordOnchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(e.target.value);
  };

  interface loginPayload {
    email: string;
    password: string;
  }

  const onSubmitHandler =async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      enteredEmail.trim().length === 0 &&
      enteredPassword.trim().length === 0
    ) {
      return console.log("input fields shouldn't be empty");
    };

    try{
      const formData = {email:enteredEmail,password:enteredPassword} as loginPayload;
      console.log("login.tsx:",formData)

      const response = await doCredentialLogin(formData);

      if(!!response.error){
        console.error(response.error)
        setError(response.error.message)
      }else{
        router.push("/")
      }


    }catch(error){}

    console.log(enteredEmail);
    console.log(enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-xl text-red-600">{error}</div>
      <Card>
        <form onSubmit={onSubmitHandler} className="p-8">
          <div className="mb-4 flex flex-col">
            <label htmlFor="" className="p-2">
              Email
            </label>
            <input
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              value={enteredEmail}
              placeholder="example@email.com"
              onChange={enteredEmailOnchangeHandler}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="" className="p-2">
              Password
            </label>
            <input
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              value={enteredPassword}
              placeholder="************"
              onChange={enteredPasswordOnchangeHandler}
            />
          </div>
          <div className="text-center">
            <Button>Submit</Button>
            <Link href="/auth/register"><p className="mt-4">Don't have an account</p></Link>
          </div>
          
        </form>
      </Card>
    </div>
  );
};
