import mongoose from 'mongoose';
const { Schema } = mongoose;

const brand = new Schema({
    brand: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Brand', brand);
