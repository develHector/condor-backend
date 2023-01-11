import { Symbol } from "../interfaces/symbol.interface";
import SymbolModel from "../models/symbol";

// services

const InsertSymbol = async (symbol: Symbol) => {
    
    // const responseInsert = await SymbolModel.create(symbol);
    
    // insert or update
    const { name, exchange } = symbol ;
    const updateData = symbol;
    const responseInsert = await SymbolModel.findOneAndUpdate({ name: name, exchange: exchange }, updateData, { new: true, upsert: true });    
    return responseInsert;
};

/** http://localhost:3002/symbol */
const GetSymbols = async (skip: number, limit: number) => {
    const responseInsert = await SymbolModel.find({}).skip(skip).limit(limit);
    return responseInsert;
};

/** http://localhost:3002/symbol/63aa37ebd94c08c748fdd748 */
const GetSymbol = async (id: string) => {
    const responseInsert = await SymbolModel.findOne({ _id: id });
    return responseInsert;
};

const UpdateSymbol = async (id: string, symbol: Symbol) => {
    const responseInsert = await SymbolModel.findOneAndUpdate({ _id: id }, symbol, { new: true, });
    return responseInsert;
};

const DeleteSymbol = async (id: string) => {
    const responseInsert = await SymbolModel.findOneAndDelete({ _id: id });
    return responseInsert;
};

export { InsertSymbol, GetSymbols, GetSymbol, UpdateSymbol, DeleteSymbol };