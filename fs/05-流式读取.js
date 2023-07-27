const fs = require('fs');

// 创建读取流对象，可以读取视屏
const rs = fs.createReadStream('./观书有感.txt');

// 绑定 data 事件
rs.on('data', chunk => {
  console.log(chunk.toString()) // 如果读取视屏，会出现乱码，因为视频内容转换不了utf-8
})

rs.on('end', () => {  
  console.log('读取完成')
})