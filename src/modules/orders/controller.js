import { Order } from '../../models/models.js';

export const getData = (req, res) => {
    Order.findAll({ raw: true }).then(orders => {
        res.status(200).send(orders);
    }).catch(err => res.status(404).send('Page not Found ', err));
}