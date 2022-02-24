import { Brand } from '../../models/models.js';

export const getData = (req, res) => {
    Brand.findAll({ raw: true }).then(brands => {
        res.status(200).send(brands);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const createData = (req, res) => {
    Brand.create({
        brand: req.body.brand
    }).then(brand => {
        res.status(200).send(brand);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const deleteData = (req, res) => {
    Brand.destroy({
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('deleted')
    );
}

export const updateData = (req, res) => {
    Brand.update({ brand: req.body.brand }, {
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('updated')
    );
}