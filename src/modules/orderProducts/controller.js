import { orderproduct } from '../../models/models';

//get
export const getData = (req, res) => {
    orderproduct.findAll({ raw: true }).then(orderProducts => {
        if (orderProducts) {
            res.status(200).send(orderProducts);
        }
    }).catch(err => res.status(404).send('Order-Product not Found '));
}

//create
export const createData = (req, res) => {
    orderproduct.create({
        productId: req.body.productId,
        orderId: req.body.orderId,
        count: req.body.count
    }).then(orderProducts =>
        res.status(200).send(orderProducts)
    ).catch(err => res.status(400).send("Order-Products doesn't created"));
}
