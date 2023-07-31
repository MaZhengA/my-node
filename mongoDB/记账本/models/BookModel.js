const mongoose = require('mongoose');

let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
});

// 6. 创建模型对象（创建集合）
let BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;