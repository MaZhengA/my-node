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
    name: {
      type: String,
      required: true, // 该属性不为空
      // unique: true // 设置独一无二的值(必须新建集合才能实现效果)
    },
    author: {
      type: String,
      default: '匿名' // 默认值
    },
    tags: {
      type: String,
      enum: ['玄幻', '志怪', '滑稽'] // 枚举，类型必须在这几个值中间
    },
    price: Number,
    is_hot: Boolean
  });

  // 6. 创建模型对象（创建集合）mongoose 会使用集合的复数去创建集合，比如集合名是book，执行完之后会自动变成 books
  let BookModel = mongoose.model('books', BookSchema);

  // 7. 读取单条信息
  // let promise = BookModel.findOne({is_hot: false});
  // promise.then(data => {
  //   console.log(data)
  // })

  // 根据 id 获取文档
  // let promise = BookModel.findById('64c1d116655aa7ca26372299');
  // promise.then(data => {
  //   console.log(data);
  // })

  // 读取所有
  BookModel.find().then(data => console.log(data))
}) 

// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
}) 