import Brand from '../../models/brands/models'

// //get
// export const getData = (req, res) => {
//     Brand.find({}, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message })
//         } else if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(400).send('there is no such data defined')
//         }
//     });
// }

// //create
// export const createData = (req, res) => {

//     Brand.bulkWrite(
//         [
//             {
//                 insertOne: {
//                     "document": { brand: req.body.brand }
//                 }
//             }
//         ]
//     ).then(data => {
//         res.status(200).send("documents successfully created");
//     })
// }

// //delete
// export const deleteData = async (req, res) => {
//     // Brand.findByIdAndRemove(req.params.id, function (err, data) {
//     //     if (err) {
//     //         res.status(500).json({ message: err.message })
//     //     }
//     //     else if (data) {
//     //         res.status(200).send("documents successfully deleted");
//     //     } else {
//     //         res.status(400).send('there is no such id defined')
//     //     }
//     // });
//     Brand.bulkWrite(
//         [
//             {
//                 deleteOne: {
//                     filter: { _id: req.params.id }
//                 }
//             }
//         ]
//     ).then(data => {
//         if (data._id) {
//             res.status(200).send("documents successfully deleted");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }

// //update
// export const updateData = async (req, res) => {
//     // Brand.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//     //     if (err) {
//     //         res.status(500).json({ message: err.message, type: 'danger' });
//     //     } else if (data) {
//     //         res.status(200).send("documents successfully updated");
//     //     } else {
//     //         res.status(400).send('there is no such id defined')
//     //     }
//     // })
//     Brand.bulkWrite(
//         [
//             {
//                 updateOne: {
//                     filter: { _id: req.params.id },
//                     update: { $set: { brand: req.body.brand } }
//                 }
//             }
//         ]
//     ).then(data => {
//         if (data) {
//             res.status(200).send("documents successfully updated");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }
import Brands from '../brands/service';

export class BrandReq {
    static async getBrand(req, res) {
        const brand = await Brands.read({ data: req.body })
        if (brand) {
            return res.status(200).send(brand);
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async createBrand(req, res) {
        const brand = await Brands.create({ data: req.body })
        if (brand) {
            return res.status(200).send(brand);
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async deleteBrand(req, res) {
        const brand = await Brands.delete({ _id: req.params.id })
        if (brand) {
            return res.status(200).send('successfully deleted');
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }

    static async updateBrand(req, res) {
        const brand = await Brands.update({ id: req.params._id, data: req.body })
        if (brand) {
            return res.status(200).send('successfully updated');
        } else {
            return res.status(400).send('there is no such data defined')
        }
    }
}
