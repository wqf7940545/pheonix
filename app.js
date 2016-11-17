var express = require('express');
var app = express();

app.use('/homepage',express.static('view'));
// app.get('/', function(req, res) {
//    res.render('index');
// });

app.listen(3000, function(){
  console.log('Example app listen on port 3000');
});

