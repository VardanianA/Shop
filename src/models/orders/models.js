import mongoose from 'mongoose';
const { Schema } = mongoose;

const order = new Schema({
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }] 
}, { timestamps: true });

module.exports = mongoose.model('Order', order);
