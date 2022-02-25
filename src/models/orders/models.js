import Sequelize, { Model } from "sequelize";
import { sequelize } from "../index";

export default class Order extends Model { }
Order.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "order"
    });
