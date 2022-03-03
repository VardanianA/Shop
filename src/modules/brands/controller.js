import Brand from '../../models/brands/models'

//get
export const getData = (req, res) => {
    Brand.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else if (data) {
            res.status(200).send(data);
        } else {
            res.status(400).send('there is no such data defined')
        }
    });
}

//create
export const createData = (req, res) => {
    const brand = new Brand(req.body);

    brand.save((err) => {
        if (err) {
            res.status(400).json({ message: err.message, type: 'danger' })
        } else {
            res.status(200).send('documents successfully created');
        }
    })
}

//delete
export const deleteData = async (req, res) => {
    Brand.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else if (data) {
            res.status(200).send("documents successfully deleted");
        } else {
            res.status(400).send('there is no such id defined')
        }
    });
}

//update
export const updateData = async (req, res) => {
    Brand.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).json({ message: err.message, type: 'danger' });
        } else if (data) {
            res.status(200).send("documents successfully updated");
        } else {
            res.status(400).send('there is no such id defined')
        }
    })
}
