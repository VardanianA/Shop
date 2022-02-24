import { orderProduct } from '../../models/models.js';

export const getData = (req, res) => {
    orderProduct.findAll({ raw: true }).then(orderProducts => {
        res.status(200).send(orderProducts);
    }).catch(err => res.status(404).send('Page not Found ', err));
}