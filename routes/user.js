const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
	res.send('hello:user');
})
router.get('/:name',function(req,res){
	//console.log("aaa");
	//res.send('hello:'+req.params.name);
	res.render('user',{
		name:req.params.name
	})
})

module.exports = router