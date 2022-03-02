// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class orderproduct extends Model { }
// orderproduct.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     count: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "orderproduct"
//     });

import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderProduct = new Schema({
    count: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('OrderProduct', orderProduct);