var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    completedAt:{
        type: Number,
        default: null
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

var otherTodo = new Todo({
    text: ' Edit this code '
});

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


var newUser2 = new User({
    name: "Ken",
    email: "ken2@example" 
});

newUser2.save().then((doc) => {
    console.log('Saved new User', doc)
}, (e) => {
    console.log('Unable to save new user', e)
})

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })

// newTodo2.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })

