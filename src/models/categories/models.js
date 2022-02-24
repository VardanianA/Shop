import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index.js";

export default class Category extends Model { }
Category.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "categorie"
    });
