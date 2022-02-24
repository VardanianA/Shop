import { User } from '../../models/models.js';

export const getData = (req, res) => {
    User.findAll({ raw: true }).then(users => {
        res.status(200).send(users);
    }).catch(err => res.status(404).send('Page not Found ', err));
}