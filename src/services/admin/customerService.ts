import { CustomerModel } from "../../models/CustomerModel";
import { db } from "../../utils/db";

// Customer Add
export const customerAdd = async (name:string, phone:string, color:string) => {
    await db
    return await CustomerModel.create({name, phone, color})
}