import { Brand, Product, Category, Color } from '../../models/models.js';

// get
export const getProduct = (req, res) => {
    Product.findAll({ raw: true }).then(products => {
        res.status(200).send(products);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

//get all available products (count > 0)
export const getProductCount = (req, res) => {
    Product.findAndCountAll({ raw: true }).then(products => {
        const key = products.rows.filter(el => el.count > 0);
        res.status(200).send(key);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

//get products by brand
export const getProductByBrand = (req, res) => {
    Product.findAll(
        {
            where: {
                brandid: req.query.brandid
            },
            include: [{
                model: Brand
            }]
        })
        .then(brands => { res.status(200).send(brands) })
        .catch(err => res.status(404).send('Page not Found ', err));
}

//get products by category
// Get products full data -> return product list join brand, category, color
export const getProductByCategory = (req, res) => {
    Product.findAll({
        where: {
            categoryid: req.query.categoryid
        },
        include: [
            { model: Brand },
            { model: Color },
            { model: Category }
        ]
    }).then(categories => { res.status(200).send(categories) })
        .catch(err => res.status(404).send('Page not Found ', err));
}

//get products by id
export const getProductById = (req, res) => {
    Product.findAll({
        where: {
            id: req.query.id
        }
    }).then(id => { res.status(200).send(id) })
        .catch(err => res.status(404).send('Page not Found ', err));
}


//create product
export const createData = (req, res) => {
    Product.create({
        name: req.body.name,
        brandid: req.body.brandid,
        colorid: req.body.colorid,
        categoryid: req.body.categoryid,
        count: req.body.count
    }).then(
        res.status(200).send('created')
    ).catch(err => res.status(404).send('Page not Found ', err));
}


//delete product
export const deleteData = (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('deleted')
    );
}


//update product
export const updateData = (req, res) => {
    Product.update({
        name: req.body.name,
        brandid: req.body.brandid,
        colorid: req.body.colorid,
        categoryid: req.body.categoryid
    }, {
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('updated')
    );
}
