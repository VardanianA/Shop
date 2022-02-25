import { Order, orderproduct, Product, User } from '../../models/models';

export const getData = (req, res) => {
    Order.findAll({
        include: [
            { model: User },
            { model: Product }
        ]
    }).then(orders => {
        res.status(200).send(orders);
    }).catch(err => res.status(404).send('Page not Found ', err));
}