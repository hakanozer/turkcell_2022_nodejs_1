import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface ICustomerSchema {
    id: string,
    name: string,
    phone: string,
    color: string
}

const CustomerSchema = new Schema({
    name: String,
    phone: String,
    color: String 
})

export const CustomerModel = mongoose.model('customer', CustomerSchema)