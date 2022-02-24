import { Category } from '../../models/models.js';

export const getData = (req, res) => {
    Category.findAll({ raw: true }).then(categories => {
        res.send(categories);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const createData = (req, res) => {
    Category.create({
        category: req.body.category
    }).then(category => {
        res.status(200).send(category);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const deleteData = (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('deleted')
    );
}

export const updateData = (req, res) => {
    Category.update({ category: req.body.category }, {
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('updated')
    );
}