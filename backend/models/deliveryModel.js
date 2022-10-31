import mongoose from "mongoose";

const deliverySchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    number: Number,
    address: String,
    pincode: Number
})

export default mongoose.model('Deliverie', deliverySchema)