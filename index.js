const express=require('express')
const app = express()

app.get('/',function(req,res){
	res.send('hello express!!');
})
app.get('/user/:name',function(req,res){
	res.send('hello,'+req.params.name+','+req.query.test+','+req.query.hehe);
})


app.listen(3000)