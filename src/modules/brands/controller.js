import { Brand, Product } from '../../models/models';

//get
export const getData = (req, res) => {
    Brand.findAll({
        raw: true
    }).then(brands => {
        if (brands) {
            res.status(200).send(brands);
        }
    }).catch(err => res.status(400).send('Brands not Found '));
}

//create
export const createData = (req, res) => {
    Brand.create({
        brand: req.body.brand
    }).then(brand => res.status(200).send(brand)
    ).catch(err => res.status(400).send("Brand doesn't created"));
}

//delete
export const deleteData = (req, res) => {
    Brand.destroy({
        where: {
            id: req.params.id
        }
    }).then(brand => brand.id ? res.status(200).send('brand successfully deleted') : res.status(400).send("id not found")
    );
}

//update
export const updateData = (req, res) => {
    Brand.update({
        brand: req.body.brand
    }, {
        where: {
            id: req.params.id
        }
    }).then(brand => brand && brand.id ? res.status(200).send('brand successfully updated') : res.status(400).send("id not found")
    );
}
