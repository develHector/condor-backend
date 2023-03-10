import { Schema, model } from "mongoose";
import { Interfaces } from "../interfaces/app.interfaces";

// models

const MarketSchema = new Schema<Interfaces.Market>(
    {
        hashkey: {
            type: String,
            required: true,
            unique: true
        },
        items: {
            type: [String],            
        },        
        enabled: {
            type: Boolean,
            required: true
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const MarketModel = model("markets", MarketSchema);
export default MarketModel;
