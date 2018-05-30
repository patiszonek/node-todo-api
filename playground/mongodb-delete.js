//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log(`Unable to connecto to mongodb server`);
    }
    console.log(`Connected to mongodb server`);
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'sialala'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({text: 'sialala'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // })

    db.collection('User').findOneAndDelete({_id: new ObjectID('5b0e7efa2723b6362c0e55f5')}).then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });

    // client.close();
});