const mongoose = require('mongoose');

let AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  time: {
    type: Date,
    require: true
  },
  type: {
    type: Number,
    default: -1
  },
  account: {
    type: Number,
    require: true
  },
  remarks: {
    type: String
  }
});

// 6. 创建模型对象（创建集合）
let AccountModel = mongoose.model('accounts', AccountSchema);

module.exports = AccountModel;