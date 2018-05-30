//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log(`Unable to connecto to mongodb server`);
    }
    console.log(`Connected to mongodb server`);
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b0e710b2121283d6ca1c4c1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    db.collection('User').find({name: 'Patrycja'}).count().then((count) => {
        console.log(`User count: ${count}`);
    }, (error) => {
        console.log(error);
    })

    // client.close();
});