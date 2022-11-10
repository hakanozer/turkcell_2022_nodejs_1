import { CustomerModel } from "../../models/CustomerModel";
import { db } from "../../utils/db";

// Customer Add
export const customerAdd = async (name:string, phone:string, color:string, userID:String) => {
    await db
    return await CustomerModel.create({name, phone, color, userID})
}

// All Customer
export const allCustomer = async (userID:String) => {
    await db
    return await CustomerModel.find({userID})
}