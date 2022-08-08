import mongoose from "mongoose";
const { Schema } = mongoose;

const AddressSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	name: String,
	houseNo: String,
    society: String,
    area: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    default: Boolean,
});

export const Address = mongoose.model('Address', AddressSchema);