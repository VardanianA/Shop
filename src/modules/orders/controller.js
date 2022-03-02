import Order from '../../models/orders/models'

//get
export const getData = async (req, res) => {
    const order = await Order.find({}).populate('userId');
    res.send(order);
}

//create
export const createData = (req, res) => {
    const order = new Order( req.body );

    order.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
