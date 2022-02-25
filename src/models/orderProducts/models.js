import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index";

export default class orderproduct extends Model { }
orderproduct.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "orderproduct"
    });
