import { Order, orderproduct, Product, User } from '../../models/models';

//get
export const getData = (req, res) => {
    Order.findAll({
        include: [
            { model: User },
            { model: Product }
        ]
    }).then(orders => {
        if (orders) {
            res.status(200).send(orders);
        }
    }).catch(err => res.status(400).send('Orders Not Found '));
}

//create
export const createData = (req, res) => {
    Order.create({
        usersid: req.body.usersid,
    }).then((data) => {
        if (data) {
            req.body.prods.forEach(prod => {
                orderproduct.create({
                    orderid: data.id,
                    productid: prod.id,
                })
            })
            res.status(200).send('created')
        }
    }).catch(err => res.status(400).send('User Not Found'));
}
