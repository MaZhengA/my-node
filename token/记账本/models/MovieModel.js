const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
});

// 6. 创建模型对象（创建集合）
let MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;