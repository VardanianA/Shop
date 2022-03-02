import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderProduct = new Schema({
    count: {
        type: String,
        required: true
    },
    orderId: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    productId: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

module.exports = mongoose.model('OrderProduct', orderProduct);
