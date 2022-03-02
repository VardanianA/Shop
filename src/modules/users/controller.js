import User from '../../models/users/models';

//get
export const getData = async(req, res) => {
    // User.findAll({ raw: true }).then(users => {
    //     if (users) {
    //         res.status(200).send(users);
    //     }
    // }).catch(err => res.status(400).send('Users not Found '));
    const user = await User.find({}).exec();
    res.send(user);
}

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