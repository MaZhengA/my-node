const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

// 6. 创建模型对象（创建集合）
let UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;