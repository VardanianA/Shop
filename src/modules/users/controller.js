import { User } from '../../models/models';

//get
export const getData = (req, res) => {
    User.findAll({ raw: true }).then(users => {
        if (users) {
            res.status(200).send(users);
        }
    }).catch(err => res.status(400).send('Users not Found '));
}
