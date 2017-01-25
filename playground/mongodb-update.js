// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log("Unable to connect to Mongodb server.");
    }
    console.log('Connected to Mongodb server');

    //Update Todos database
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("58881b62b7222eea03b4195f")
    // }, {    
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Update Users Database
    db.collection('Users').findOneAndUpdate({
        name : "Joe"
    }, {
        $set: {
            name: "Ken"
        },
    
        $inc: {
            age: -1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    
    // db.close();
});

