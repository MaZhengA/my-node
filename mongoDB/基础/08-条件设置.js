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
      // enum: ['玄幻', '志怪', '滑稽'] // 枚举，类型必须在这几个值中间
    },
    price: Number,
    is_hot: Boolean
  });

  // 6. 创建模型对象（创建集合）mongoose 会使用集合的复数去创建集合，比如集合名是book，执行完之后会自动变成 books
  let BookModel = mongoose.model('books', BookSchema);

  // 价格小于20的图书 lte: 小于等于 gt: 大于 gte: 大于等于 ne 不等于
  // BookModel.find({ price: { $lt: 29.9 } }).then(data => console.log(data));

  // 满足某些或 or
  // BookModel.find({ $or: [{author: '曹雪芹'}, { price: '19.9' }] }).then(data => console.log(data));

  // 满足条件且 and
  // BookModel.find({ $and: [{price: { $gt: 20 }}, {name: '红楼'}] }).then(data => console.log(data))

  // 正则
  BookModel.find({ name: /水/ }).then(data => console.log(data));
}) 

// 连接失败的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
})

// 连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
}) 