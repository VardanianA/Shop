import express from "express";
import bodyParser from 'body-parser';
import userRouter from "./modules/users/router.js";
import brandRouter from "./modules/brands/router.js";
import categoryRouter from "./modules/categories/router.js";
import colorRouter from "./modules/colors/router.js";
import orderRouter from "./modules/orders/router.js";
import orderProductRouter from "./modules/orderProducts/router.js";
import productRouter from "./modules/products/router.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/color', colorRouter);
app.use('/order', orderRouter);
app.use('/orderProduct', orderProductRouter);
app.use('/product', productRouter);

app.listen(3000);
