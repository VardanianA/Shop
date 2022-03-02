import OrderProduct from '../../models/orderProducts/models'

//get
export const getData = async(req, res) => {
    const orderProduct = await OrderProduct.find({}).populate(['orderId', 'productId']);
    res.send(orderProduct);
}

//create
export const createData = (req, res) => {
    const orderProduct = new OrderProduct(req.body);

    orderProduct.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
