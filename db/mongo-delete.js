//var MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('unable to connect db');
  }
  console.log('connected to Mongodb Driver');

  var db=client.db('TodoApp');

  // delete many Todos

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //     console.log(result);
  // });

  // delete one Todos

  // db.collection('Todos').deleteOne({text:'Watch Movie'}).then((result)=>{
  //  console.log(result);
  // });

  // find one and delete Todos

  // db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
  //     console.log(result);
  // });
  
  // delteMany users
  // db.collection('Users').deleteMany({name:'Gaurav Kumar'}).then((result)=>{
  //       console.log(result);
  // });

  //findOneAndDelete users

  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('5a8f0a761629670a903cc3fb')
      }).then((result)=>{
       console.log(result);
  });


  client.close();
});
