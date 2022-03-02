// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class Color extends Model { }
// Color.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     color: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "color"
//     });

import mongoose from 'mongoose';
const { Schema } = mongoose;

const color = new Schema({
    color: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Color', color);