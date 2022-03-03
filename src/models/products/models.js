import mongoose from 'mongoose';
const { Schema } = mongoose;

const product = new Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    brandId: [{ type: Schema.Types.ObjectId, ref: 'Brand' }],
    colorId: [{ type: Schema.Types.ObjectId, ref: 'Color' }],
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
}, { timestamps: true });

module.exports = mongoose.model('Product', product);
