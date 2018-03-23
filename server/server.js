const {ObjectID} = require('mongodb');

	var express=require('express');
var bodyParser=require('body-parser');

var mongoose=require('./db/mongoose.js');
var Todo=require('./models/todo.js');
var User=require('./models/user.js');

var app=express();

const port=process.env.PORT || 5000;

app.use(bodyParser.json());

// post Todos
app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

// get Todos
app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({
			todos:todos
		});
	},(err)=>{
		res.status(400).send(err);
	});
});

// get Todos by id
app.get('/todos/:id',(req,res)=>{
	const todoId=req.params.id;
	if(!ObjectID.isValid(todoId))
	{
	    return res.status(404).send();
	}
	Todo.findById(todoId).then((todo)=>{
		if(!todo)
		{
			return res.status(404).send();
		}
		else{
			res.send({todo});
		}
		
	}).catch((err)=>{
		res.status(400).send();
	});
});

// get users
app.get('/users',(req,res)=>{
	User.find().then((doc)=>{
		res.send(doc);
	},(err)=>{
		console.log('unable to find Todos',err);
	})
});

app.listen(port,()=>{
  console.log('started on port'+port);
});
