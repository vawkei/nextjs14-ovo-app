import  {connect} from "mongoose";


let uri:string | undefined = process.env.MONGO_URI
;
export const connectDB = async()=>{
    try{   
        if(!uri){
            console.log("MONGO_URI not defined")
            throw new Error("MONGO_URI not defined")
        }
        await connect(uri)
        console.log("its on");
        console.log("connected to DB")
    }catch(error){
        console.log(error)
        throw new Error("Error in connecting to DB")
    };
};