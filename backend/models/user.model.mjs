import mongoose from "mongoose";
import 'dotenv/config';
import connectToDB from "../db/dbStudent.mjs";

const userSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    

},{timestamps:true})
const User = mongoose.model('User', userSchema)
export default User