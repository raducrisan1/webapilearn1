var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db;
if(process.env.ENV == 'Test')
    db = mongoose.connect('mongodb://localhost/bookAPI_test');
else
    db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

bookRouter = require('./routes/bookRoutes')(Book);
app.use('/api/books', bookRouter);

app.listen(port, function() {
    console.log('running on my port ' + port);
});

module.exports = app;