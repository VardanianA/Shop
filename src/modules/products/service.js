import req from 'express/lib/request';
import Product from '../../models/products/models'

export default class Products {
    static async read({ data }) {
        return Product.find(data).populate(['brandId', 'colorId', 'categoryId']);
    }

    static async readByBrand({ data }) {
        return Product.find(data).where({ brandId: data }).populate(['brandId', 'colorId', 'categoryId']);
    }

    static async create({ data }) {
        return Product.create(data);
    }

    static async delete({ data }) {
        return Product.deleteOne(data);
    }

    static async update({ data }) {
        return Product.updateOne(data);
    }
}
