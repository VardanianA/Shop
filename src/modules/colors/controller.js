import { Color } from '../../models/models';

export const getData = (req, res) => {
    Color.findAll({ raw: true }).then(colors => {
        res.status(200).send(colors);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const createData = (req, res) => {
    Color.create({
        color: req.body.color
    }).then(color => {
        res.status(200).send(color);
    }).catch(err => res.status(404).send('Page not Found ', err));
}

export const deleteData = (req, res) => {
    Color.destroy({
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('deleted')
    );
}

export const updateData = (req, res) => {
    Color.update({ color: req.body.color }, {
        where: {
            id: req.params.id
        }
    }).then(
        res.status(200).send('updated')
    );
}