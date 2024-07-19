import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    sessionToken:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    expires:{
        type:Date,
        required:true
    }
});

export default mongoose.models.session || mongoose.model("session",SessionSchema);