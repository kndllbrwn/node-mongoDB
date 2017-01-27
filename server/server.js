var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

var newTodo2 = new Todo({
    text: 'Walk dog',
    completed: false,
    completedAt: 1500 
});

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })

newTodo2.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
})