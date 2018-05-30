//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log(`Unable to connecto to mongodb server`);
    }
    console.log(`Connected to mongodb server`);
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('5b0e871d256b04af0d196719')
    //     }, 
    //     {
    //         $set: {
    //             completed: false
    //         }
    //     },{
    //         returnOriginal: false
    //     }).then((results) => {
    //         console.log(results);
    //     }
    // );

    db.collection('User').findOneAndUpdate(
        {
            _id: new ObjectID('5b0e71e8124e892e88aaaf6f')
        },
        {
            $set: {
                name: 'Podryk'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    // client.close();
});