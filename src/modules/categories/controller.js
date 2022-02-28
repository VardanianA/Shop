import { Category } from '../../models/models';

//get
export const getData = (req, res) => {
    Category.findAll({ raw: true }).then(categories => {
        if (categories) {
            res.status(200).send(categories);
        }
    }).catch(err => res.status(400).send('Categories not found'));
}

//create
export const createData = (req, res) => {
    Category.create({
        category: req.body.category
    }).then(category => {
        res.status(200).send(category);
    }).catch(err => res.status(400).send("Category doesn't created"));
}

//delete
export const deleteData = (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(category => category.id ? res.status(200).send('category successfully deleted') : res.status(400).send('id not found')
    );
}

//update
export const updateData = (req, res) => {
    Category.update({ category: req.body.category }, {
        where: {
            id: req.params.id
        }
    }).then(category => category.id ? res.status(200).send('category successfully updated') : res.status(400).send('id not found')
    );
}
