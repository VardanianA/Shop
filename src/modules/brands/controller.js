import Brand from '../../models/brands/models'

//get
export const getData = async (req, res) => {
    const brand = await Brand.find({}).exec();
    res.send(brand);
}

//create
export const createData = (req, res) => {
    const brand = new Brand(req.body);

    brand.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
