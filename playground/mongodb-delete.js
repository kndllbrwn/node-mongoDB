// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log("Unable to connect to Mongodb server.");
    }
    console.log('Connected to Mongodb server');

//    deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

//    deleteOne
//     db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
//         console.log(result);
//     });

// //    findOneAndDelete
//     db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//         console.log(result);
//     });

    // deleteMany Users
    // db.collection('Users').deleteMany({name: "Ken"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete Users
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5887e39d199b18131413ddd8")
    }).then((result) => {
            console.log(result);
        });
    
    // db.close();
});

