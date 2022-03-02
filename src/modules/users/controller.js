import User from '../../models/users/models';

//get
export const getData = async(req, res) => {
    const user = await User.find({}).exec();
    res.send(user);
}

//create
export const createData = (req, res) => {
    const user = new User(req.body);

    user.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })
}
