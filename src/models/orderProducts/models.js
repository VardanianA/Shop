import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index.js";

export default class orderProduct extends Model { }
orderProduct.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "orderproduct"
    });
