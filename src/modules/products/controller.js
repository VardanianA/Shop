// import Product from '../../models/products/models';
const ObjectId = require('mongodb').ObjectID;

// // get
// export const getProducts = async (req, res) => {
//     Product.find({}, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         } else if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(400).send('there is no such data defined')
//         }
//     }).populate(['brandId', 'categoryId', 'colorId']);
// }

// //create
// export const createData = (req, res) => {
//     const product = new Product(req.body);

//     product.save((err) => {
//         if (err) {
//             res.status(400).json({ message: err.message, type: 'danger' })
//         } else {
//             res.status(200).send('documents successfully created');
//         }
//     })
// }

// //get products by brand
// export const getProductByBrand = async (req, res) => {
//     Product.findOne({ "brandId": ObjectId(req.query.brandId) }, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         } else if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(400).send('there is no such data defined')
//         }
//     });
// }

// //get products by category
// export const getProductByCategory = async (req, res) => {
//     Product.findOne({ "categoryId": ObjectId(req.query.categoryId) }, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         } else if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(400).send('there is no such data defined')
//         }
//     }).populate(['brandId', 'categoryId', 'colorId']);
// }

// //get products by category
// export const getProductById = async (req, res) => {
//     Product.findOne({ "_id": ObjectId(req.query._id) }, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         } else if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(400).send('there is no such data defined')
//         }
//     }).populate(['brandId', 'categoryId', 'colorId']);
// }

// //delete
// export const deleteData = async (req, res) => {
//     Product.findByIdAndRemove(req.params.id, function (err, docs) {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         }
//         else if (docs) {
//             res.status(200).send("documents successfully deleted");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     });
// }

// //update
// export const updateData = async (req, res) => {
//     Product.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message, type: 'danger' });
//         } else if (data) {
//             res.status(200).send("documents successfully updated");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }


import Products from '../products/service';

export class ProductController {
    static async getData(req, res) {
        const product = await Products.read({ data: req.body })
        if (product) {
            return res.status(200).send(product);
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async getDataByBrand(req, res) {
        const product = await Products.readByBrand({ data: req.body })
        console.log(typeof (req.query.brandId));
        if (product) {
            return res.status(200).send(product);
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async createData(req, res) {
        const product = await Products.create({ data: req.body })
        if (product) {
            return res.status(200).send(product);
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async deleteData(req, res) {
        const product = await Products.delete({ _id: req.params.id })
        if (product) {
            return res.status(200).send('successfully deleted');
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async updateData(req, res) {
        const product = await Products.update({ id: req.params._id, data: req.body })
        if (product) {
            return res.status(200).send('successfully updated');
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }
}