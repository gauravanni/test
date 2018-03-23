var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err)
  {
    return console.log('unable to connect db');
  }
  console.log('connected to Mongodb Driver');
  var db=client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   'text':'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err)
  //   {
  //     return console.log('unable to insert todo',err);
  //   }
  //     console.log(JSON.stringify(result.ops,undefined,2))
  // });
  db.collection('Users').insertOne({
    'name':'Gaurav Kumar',
    age:24,
    "location":"Banglore"
  },(err,result)=>{
    if(err)
    {
      return console.log('unable to insert users',err);
    }
      console.log(JSON.stringify(result.ops,undefined,2))
  });
  client.close();
});
