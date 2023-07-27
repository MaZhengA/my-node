// 导入 fs 模块
const fs = require('fs');

// 写入文件
fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
  if (err) {
    console.log('写入失败');
    return;
  }
})