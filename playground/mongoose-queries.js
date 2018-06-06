const {ObjectId} = require('mongodb');
const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5b17d23196b0aa14703e9b9f11';
var userId = '5b1795380fe0552fe0155b77';

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((err) => {
    console.log(err);
});
// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo)
//         return console.log('Id not found');
//     console.log('Todo By Id', todo);
// }).catch((err) => {
//     console.log(err);
// });