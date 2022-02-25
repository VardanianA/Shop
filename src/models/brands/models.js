import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index";

export default class Brand extends Model { }
Brand.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "brand"
    });
