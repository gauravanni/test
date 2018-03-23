//var MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('unable to connect db');
  }

  console.log('connected to Mongodb Driver');

  var db=client.db('TodoApp');

  // update Todos
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5a8e6adcba2a350b84815f81')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },
  //   {
  //     returnOriginal:false
  //   }).then((result)=>{
  //       console.log(result);
  //   });

  // update Users

    db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5a8edfa41629670a903cc3bf')
  },{
    $set:{
      name:'Payal Kumari'
    },
    $inc:{
      age:-1
    }
  },
    {
      returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

  client.close();
});
