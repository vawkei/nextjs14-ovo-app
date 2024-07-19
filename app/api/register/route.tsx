import { User } from "../../../models/user";
import { connectDB } from "@/connect";
//import { Request, Response } from "express";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

//RegisterUser================================================================

export const POST = async (req: NextRequest, res: NextResponse) => {


  const body = await req.json();
  console.log(body);

  console.log(body.name, body.email, body.password);

  if (!body.name || !body.email || !body.password) {
    return Response.json({
      status: 400,
      msg: "please insert input from the frontend",
    });
  }

  let userData: {
    name: string;
    email: string;
    password: string;
  };

  const salt =await bcrypt.genSalt(10);
  const hashedPassword  = await bcrypt.hash(body.password,salt)

  userData = { name: body.name, email: body.email, password: hashedPassword };

  try {

    console.log("starting connection to mongo");
    await connectDB();
    
    console.log("connection to mongo established");
    
    const user = await User.create(userData);
    console.log(user);
    
    return Response.json({ status: 201, msg: "new user created" });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, msg: error });
  }
};
