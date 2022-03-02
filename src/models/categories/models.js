// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class Category extends Model { }
// Category.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     category: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "categorie"
//     });

import mongoose from 'mongoose';
const { Schema } = mongoose;

const category = new Schema({
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', category);