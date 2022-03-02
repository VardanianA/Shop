import Category from '../../models/categories/models';

//get
export const getData = async(req, res) => {
    const category = await Category.find({}).exec();
    res.send(category);
}

//create
export const createData = (req, res) => {
    const category = new Category(req.body);

    category.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
