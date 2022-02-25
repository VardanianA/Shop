import { orderproduct } from '../../models/models';

export const getData = (req, res) => {
    orderproduct.findAll({ raw: true }).then(orderProducts => {
        res.status(200).send(orderProducts);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const createData = (req, res) => {
    orderproduct.create({
        productId: req.body.productId,
        orderId: req.body.orderId,
        count: req.body.count
    }).then(
        res.status(200).send('created')
    ).catch(err => res.status(404).send('Page not Found ', err));
}
