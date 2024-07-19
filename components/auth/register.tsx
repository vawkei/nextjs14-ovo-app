"use client";

import React, { useState } from "react";
import Card from "../ui/card";
import Button from "../ui/button";
import Link from "next/link";

export const RegisterComponent = () => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const [message, setMessage] = useState<{}>("");

  const enteredNameOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(e.target.value);
  };

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

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return console.log("input fields shouldn't be empty");
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from server:",data);
    } catch (error) {
      console.log(error);
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPassword);
    // setEnteredName("");
    // setEnteredEmail("");
    // setEnteredPassword("");
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card>
        <form onSubmit={onSubmitHandler} className="p-4">
          <div className="mb-2 flex flex-col">
            <label htmlFor="" className="p-2">
              Name
            </label>
            <input
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              value={enteredName}
              placeholder="please enter your name"
              onChange={enteredNameOnChangeHandler}
            />
          </div>
          <div className="mb-2 flex flex-col">
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
          <div className="mb-2 flex flex-col">
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
            <Link href="/auth/login">
              <p className="mt-4">Already have an account</p>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
