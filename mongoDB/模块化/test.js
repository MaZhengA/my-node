// 导入db
const db = require('./db/db');

const mongoose = require('mongoose');

const MovieModel = require('./models/MovieModel');

// 调用函数
db(() => {
  // 7. 创建文档
  let promise = MovieModel.create({
    title: '让子弹飞',
    director: '姜文'
  });

  promise.then(function (obj) {
    console.log(obj)
    // 8. 关闭数据库连接(项目运行过程中不会添加此代码)
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })
})

  