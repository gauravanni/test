var chemistryTableInitialStr = '<table class="topicListBox innerPage"><tbody><tr><td class="headingBox" style="text-align: center; padding: 10px;" colspan="2"><b><a href="https://byjus.com/chemistry/chemistry-article/">More Chemistry Articles</a></b></td></tr>';
var chemistryTableFinalStr = '</tbody></table>';
var chemistryTabledummyStr = '<td class="contentBox" style="text-align: center;"><a href="%link%">%title%</a></td>';

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

const {ObjectID} = require('mongodb');
var express=require('express');
var bodyParser=require('body-parser');

var mongoose=require('./db/mongoose.js');
var Todo=require('./models/todo.js');
var User=require('./models/user.js');
var Item=require('./models/keyword.js');

var app=express();


const port=process.env.PORT || 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/ncertWidget',(req,res)=>{
    try {
        var jumpValue = 4;

        const reqUrl = req.body.url;
        console.log(reqUrl);
        if (!reqUrl) {
            res.status(404).send({
                status: false,
                message: "URL 1 not found"
            })
            return;
        }
        var category;

        Item.findOne({
            //"urlType": "RELATED-LINK",
            "url": reqUrl
        }).exec()
            .then(function (found) {
                if (!found) {
                    /* throw new Error("URL not Found: "+ reqUrl); */
                    res.status(404).send({
                        status: false,
                        message: "URL 2 not found"
                    })
                } else {
                    category = found.category;
                    return Item.find({
                        //"urlType": "RELATED-LINK",
                        "category": "rs-aggarwal-solutions"
                    })
                }
            })
            .then(function (items) {

                var finalStr = chemistryTableInitialStr.replace('%category%', "Related");

                var index = findIndexOf(reqUrl, items);
                console.log("found index:"+index);
                for (i = 0; i < 8; i++) {
                    if (i % 2 === 0)
                        finalStr += '<tr>'
                    var nextIndex = (index + ((i + 1) * jumpValue)) % items.length;
                    var dummyStr = chemistryTabledummyStr;
                    dummyStr = dummyStr.replaceAll('%title%', items[nextIndex].title);
                    dummyStr = dummyStr.replaceAll('%link%', items[nextIndex].url);
                    finalStr += dummyStr;
                    if (i % 2 !== 0)
                        finalStr += '</tr>'
                }
                finalStr += chemistryTableFinalStr;
                res.status(200).send({
                    success: 'true',
                    message: finalStr
                });
            })
            .catch(function (error) {
                res.status(500).send({
                    status: false,
                    message: "Something went wrong"
                })
            })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
});

app.get('/',(req,res)=>{
	res.send('todo api');
})

// get Todos
app.get('/items',(req,res)=>{
	Item.find().then((items)=>{
		res.send({
			items:items
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

app.get('/',(req,res)=>{
	res.send('todo api');
})

function findIndexOf(url, items) {
    for (i = 0; items.length; i++) {
        if (items[i].url === url)
            return i;
    }
    return -1;
}


app.listen(port,()=>{
  console.log('started on port'+port);
});
