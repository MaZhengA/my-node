// 导入db
const db = require('./db/db');

const mongoose = require('mongoose');

const BookModel = require('./models/BookModel');

// 调用函数
db(() => {
  // 7. 创建文档
  let promise = BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
  });

  promise.then(function (obj) {
    console.log(obj)
    // 8. 关闭数据库连接(项目运行过程中不会添加此代码)
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })
}, () => {
  console.log('连接失败');
})

  