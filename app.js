const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//let nav_content=['biography','gallery','about'];
//let n,i; 
//n=nav_content.length;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname+'/gallery/index.html'));
});

router.get('/biography',function(req,res){
  res.sendFile(path.join(__dirname+'/biography/index.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about/index.html'));
});


app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8084);
 
console.log('Running at Port 8084');