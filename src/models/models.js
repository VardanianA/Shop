import Product  from './products/models.js'
import Order from './orders/models.js';
import User from './users/models.js';
import Color from './colors/models.js';
import Category from './categories/models.js';
import Brand from './brands/models.js';
import orderProduct from './orderProducts/models.js';

User.hasMany(Order, { foreignKey: "usersid" });
Order.belongsTo(User, { foreignKey: "usersid" });

Brand.hasMany(Product, {foreignKey: "brandid"});
Product.belongsTo(Brand, { foreignKey: "brandid" });

Color.hasMany(Product, {foreignKey: "colorid"});
Product.belongsTo(Color, { foreignKey: "colorid" });

Category.hasMany(Product, {foreignKey: "categoryid"});
Product.belongsTo(Category, { foreignKey: "categoryid" });

Product.belongsToMany(Order, { through: orderProduct });
Order.belongsToMany(Product, { through: orderProduct });


User.sync();
Order.sync();
Brand.sync();
Product.sync();
Color.sync();
Category.sync();
orderProduct.sync();

export { User, Order, Brand, Product, Color, Category, orderProduct };
