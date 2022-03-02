import Color from '../../models/colors/models'

//get
export const getData = async(req, res) => {
    const color = await Color.find({}).exec();
    res.send(color);
}

//create
export const createData = (req, res) => {
    const color = new Color(req.body);

    color.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
