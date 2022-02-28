import express from "express";
import bodyParser from 'body-parser';
import userRouter from "./modules/users/router";
import brandRouter from "./modules/brands/router";
import categoryRouter from "./modules/categories/router";
import colorRouter from "./modules/colors/router";
import orderRouter from "./modules/orders/router";
import orderProductRouter from "./modules/orderProducts/router";
import productRouter from "./modules/products/router";
import expressValidator from "express-validator";
import createError from "http-errors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/user', userRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/color', colorRouter);
app.use('/order', orderRouter);
app.use('/orderProduct', orderProductRouter);
app.use('/product', productRouter);
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(3000);
