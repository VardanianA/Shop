// import { Order, orderproduct, Product, User } from '../../models/models';
import Order from '../../models/orders/models'

//get
export const getData = async (req, res) => {
    // Order.findAll({
    //     include: [
    //         { model: User },
    //         { model: Product }
    //     ]
    // }).then(orders => {
    //     if (orders) {
    //         res.status(200).send(orders);
    //     }
    // }).catch(err => res.status(400).send('Orders Not Found '));
    const order = await Order.find({}).populate('userId');
    res.send(order);
}

//create
export const createData = (req, res) => {
    // Order.create({
    //     usersid: req.body.usersid,
    // }).then((data) => {
    //     if (data) {
    //         req.body.prods.forEach(prod => {
    //             orderproduct.create({
    //                 orderid: data.id,
    //                 productid: prod.id,
    //             })
    //         })
    //         res.status(200).send('created')
    //     }
    // }).catch(err => res.status(400).send('User Not Found'));
    const order = new Order( req.body );

    order.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
