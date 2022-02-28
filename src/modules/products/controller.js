import { Brand, Product, Category, Color } from '../../models/models';

// get
export const getProducts = (req, res) => {
    Product.findAll({
        include: [
            { model: Brand },
            { model: Color },
            { model: Category }
        ],
        order: [
            [req.query.field, 'ASC']
        ]
    }).then(products => {
        if (products) {
            res.status(200).send(products);
        }
    }).catch(err => res.status(400).send('Products not Found '));
}

//get all available products (count > 0)
export const getProductCount = (req, res) => {
    Product.findAndCountAll({ raw: true }).then(products => {
        const key = products.rows.filter(el => el.count > 0);
        res.status(200).send(key);
    }).catch(err => res.status(404).send('Products not Found '));
}

//get products by brand
export const getProductByBrand = (req, res) => {
    Product.findAll(
        {
            where: {
                brandid: req.query.brandid
            },
            include: [
                { model: Brand },
                { model: Color },
                { model: Category }
            ]
        })
        .then(brands => {
            if (brands.id) {
                res.status(200).send(brands)
            }
        })
        .catch(err => res.status(400).send('Products not Found '));
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
    }).then(categories => {
        if (categories.id) {
            res.status(200).send(categories)
        }
    })
        .catch(err => res.status(400).send('Products not Found '));
}

//get products by id
export const getProductById = (req, res) => {
    Product.findAll({
        where: {
            id: req.query.id
        }
    }).then(data => {
        if (data.id)
            res.status(200).send(data)
    })
        .catch(err => res.status(400).send('Products not Found '));
}

//create
export const createData = (req, res) => {
    Product.create({
        name: req.body.name,
        brandid: req.body.brandid,
        colorid: req.body.colorid,
        categoryid: req.body.categoryid,
        count: req.body.count
    }).then(products => res.status(200).send(products)
    ).catch(err => res.status(400).send("Products doesn't created"));
}

//delete
export const deleteData = (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(products => products.id ? res.status(200).send('products successfully deleted') : res.status(400).send("Products doesn't deleted")
    );
}

//update
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
    }).then(products => products.id ? res.status(200).send('products successfully updated') : res.status(400).send("Products doesn't deleted")
    );
}
