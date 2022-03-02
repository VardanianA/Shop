// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class Product extends Model { }
// Product.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     count: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "product"
//     });

import mongoose from 'mongoose';
const { Schema } = mongoose;

const product = new Schema({
}, { timestamps: true });

module.exports = mongoose.model('Product', product);