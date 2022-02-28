import Sequelize from "sequelize";

export const sequelize = new Sequelize("shopdb", "root", "1111", {
  dialect: "postgres",
  define: {
    timestamps: false
  }
});
