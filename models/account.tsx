import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    providerAccoundId:{
        type:String,
        required:true
    },
    refresh_token:String,
    access_token:String,
    expires_at:Number,
    token_type:String,
    scope:String,
    id_token:String,
    session_state:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
});

export default mongoose.models.account || mongoose.model("account",AccountSchema)