// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class Order extends Model { }
// Order.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "order"
//     });


import mongoose from 'mongoose';
const { Schema } = mongoose;

const order = new Schema({
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Order', order);