import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

// models

const UserSchema = new Schema<UserInterface.User>(
    {     
        name:{
            type: String,
            required: true,
        }   ,
        password: {
            type: String,
            required: true ,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },        
        description: {
            type: String,
            required: true,
            default: "No description",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("users", UserSchema);
export default UserModel ;
