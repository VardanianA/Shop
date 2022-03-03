import mongoose from 'mongoose';
const { Schema } = mongoose;

const color = new Schema({
    color: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Color', color);
