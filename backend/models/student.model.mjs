import mongoose from "mongoose";
import 'dotenv/config';
import connectToDB from "../db/dbStudent.mjs";

const studentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    rollNo:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    Class:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    }
    

},{timestamps:true})
const Student = mongoose.model('Student', studentSchema)
export default Student