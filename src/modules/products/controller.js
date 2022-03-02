import Product from '../../models/products/models'

// get
export const getProducts = async(req, res) => {
    const product = await Product.find({}).populate(['brandId', 'colorId', 'categoryId']);
    res.send(product);
}

//create
export const createData = (req, res) => {
    const product = new Product(req.body);

    product.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
