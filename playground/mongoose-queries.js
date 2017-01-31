const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "689000eaa92f2cb097c41a1311";

// if (!ObjectId.isValid(id)) {
//     console.log('Id not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos)
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo)
// // });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = "588d4986eacd8f510d36e738";

if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

User.findById(id).then((user) => {
    if(!id){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));