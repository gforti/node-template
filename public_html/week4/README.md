# Week 4 Guide To MongoDB and Mongoose

## Mongoose Schema

```sh
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
```

## Mongoose CRUD Operations

### Create
```sh
var Review = require('../models/review');

  Review.create({
    data1: 'data1',
    data2: 'data2',
    data3: 'data3'
  },function (err) {           
     /* saved! Callbacks are optional */
     successCB();
  });
```