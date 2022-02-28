import Product from './products/models'
import Order from './orders/models';
import User from './users/models';
import Color from './colors/models';
import Category from './categories/models';
import Brand from './brands/models';
import orderproduct from './orderProducts/models';

//orders
User.hasMany(Order, { foreignKey: "usersid" });
Order.belongsTo(User, { foreignKey: "usersid" });

//products
Brand.hasMany(Product, { foreignKey: "brandid" });
Product.belongsTo(Brand, { foreignKey: "brandid" });

Color.hasMany(Product, { foreignKey: "colorid" });
Product.belongsTo(Color, { foreignKey: "colorid" });

Category.hasMany(Product, { foreignKey: "categoryid" });
Product.belongsTo(Category, { foreignKey: "categoryid" });

//orderProducts
Product.belongsToMany(Order, { through: orderproduct });
Order.belongsToMany(Product, { through: orderproduct });

User.sync();
Order.sync();
Brand.sync();
Product.sync();
Color.sync();
Category.sync();
orderproduct.sync();

export { User, Order, Brand, Product, Color, Category, orderproduct };
