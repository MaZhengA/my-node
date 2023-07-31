/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */

module.exports = function(success, error) {

  // 判断 error,为其设置一个默认值
  if (typeof error !== 'function') {
    error = function() {
      console.log('连接失败');
    }
  }

  // 1. 安装mongoose
  // 2. 导入mongoose
  const mongoose = require('mongoose');
  // 导入配置文件
  const { DBHOST, DBPORT, DBNAME } = require('../config/config');

  // 设置 strictQuery 为 true
  mongoose.set('strictQuery', true);
  
  // 3. 连接 mongodb 服务                       数据库名称
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  
  // 4. 设置回调
  // 连接成功的回调
  // 本事件只执行一次
  mongoose.connection.once('open', () => {
    success()
  }) 
  
  // 连接失败的回调
  mongoose.connection.on('error', () => {
    error()
  })
  
  // 连接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('连接关闭');
  }) 
}

