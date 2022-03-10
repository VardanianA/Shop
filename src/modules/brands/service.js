import Brand from '../../models/brands/models'

export default class Brands {
    static async read({ data }) {
        return Brand.find(data);
    }

    static async create({ data }) {
        return Brand.create(data);
    }

    static async delete({ data }) {
        return Brand.deleteOne(data);
    }

    static async update({ data }) {
        return Brand.updateOne(data);
    }
}
