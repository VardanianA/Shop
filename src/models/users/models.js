// import Sequelize, { Model } from "sequelize";
// import { sequelize } from "../index";

// export default class User extends Model { }
// User.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     firstname: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     lastname: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// },
//     {
//         sequelize,
//         modelName: "user"
//     });

import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', user);