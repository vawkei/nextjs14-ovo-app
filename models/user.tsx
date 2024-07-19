import { match } from "assert";
import mongoose, {model,models} from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"please enter your name"],
        minlength:[3,"name should be 3 or more characters"],
        maxlength:[10,"name shouldn't be more than 10 characters"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"please enter your email"],
        unique:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please Provide a valid email",
          ],
    },
    password:{
        type:String,
        trim:true,
        required:[true,"please insert password"],
        minlength:[6,"password shouldn't be less than 6 characters"]
    }
},{timestamps:true});


// module.exports = mongoose.model("Task",taskSchema)
//export const User = models?.User || model('User', UserSchema);
export const User =  model("user",userSchema)