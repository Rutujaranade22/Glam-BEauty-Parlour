import { Schema,model } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        minlength:3,
        maxlenght:20,
    },
    city:{
        type:String,
    }},
    {
        timestamps:true,
    }
);

const User = model('User', userschema);
export default User;