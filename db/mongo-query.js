const {ObjectID} = require('mongodb');

const mongoose= require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');
const User= require('./../server/models/user');

var id='5a9447b2dcc09b12e882f430';

// if(!ObjectID.isValid(id))
// {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log(todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todos)=>{
//     console.log(todos);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id is not defined');
//     }
//     console.log(todo);
// }).catch((e)=>console.log(e));


User.findById(id).then((user)=>{
if(!user)
{
    return console.log('user is not present');
}
console.log(user);
}).catch((err)=>console.log(err));






