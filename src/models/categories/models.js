import mongoose from 'mongoose';
const { Schema } = mongoose;

const category = new Schema({
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', category);
