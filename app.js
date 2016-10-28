var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

app.use('/api', bookRouter);
bookRouter.route('/books')
    .get(function(req, res) {
        var query = {};
        if(req.query.gender) {
            query.gender = req.query.gender;
        }
        Book.find(query, function(err, books) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        });
    });


app.listen(port, function() {
    console.log('running on my port ' + port);
});