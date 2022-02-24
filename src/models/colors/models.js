import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index.js";

export default class Color extends Model { }
Color.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "color"
    });
