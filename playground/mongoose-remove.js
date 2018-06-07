const {ObjectId} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5b17d23196b0aa14703e9b9f';
var userId = '5b1795380fe0552fe0155b77';

Todo.remove({}).then((result) => {
    //remove all documents
});

Todo.findOneAndRemove({}).then(() => {
    //remove one by some propertie
});

Todo.findByIdAndRemove('asd').then((todo) => {
    //remove one by id
});