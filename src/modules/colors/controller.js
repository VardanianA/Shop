import { Color } from '../../models/models';

//get
export const getData = (req, res) => {
    Color.findAll({ raw: true }).then(colors => {
        if (colors) {
            res.status(200).send(colors);
        }
    }).catch(err => res.status(400).send('Colors not Found '));
}

//create
export const createData = (req, res) => {
    Color.create({
        color: req.body.color
    }).then(color => {
        res.status(200).send(color);
    }).catch(err => res.status(400).send("Category doesn't created"));
}

//delete
export const deleteData = (req, res) => {
    Color.destroy({
        where: {
            id: req.params.id
        }
    }).then(color => color.id ? res.status(200).send('color successfully deleted') : res.status(400).send("Color doesn't deleted")
    );
}

//delete
export const updateData = (req, res) => {
    Color.update({ color: req.body.color }, {
        where: {
            id: req.params.id
        }
    }).then(color => color.id ? res.status(200).send('color successfully updated') : res.status(400).send("Color doesn't updated")
    );
}
