// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 连接 mongodb 服务                       数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 4. 设置回调
// 连接成功的回调
// 本事件只执行一次
mongoose.connection.once('open', () => {
  // console.log('连接成功');
  // 5. 创建文档的结构对象
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  });

  // 6. 创建模型对象（创建集合）
  let BookModel = mongoose.model('books', BookSchema);

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
}) 

// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
}) 