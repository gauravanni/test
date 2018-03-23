//var MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('unable to connect db');
  }
  console.log('connected to Mongodb Driver');

  var db=client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5a8ed3841629670a903cc3ba')
  // }).toArray()
  //     .then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //     console.log('unable to fetch data from todos ',err)
  // });

  //  db.collection('Todos').find().count()
  //     .then((count)=>{
  //       console.log(`Todos count: ${count}`);
  // },(err)=>{
  //     console.log('unable to fetch data from todos ',err)
  // });

  db.collection('Users').find({name:'Gaurav Kumar'}).toArray()
      .then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('unable to fetch data from todos ',err)
  });
      
  client.close();
});
