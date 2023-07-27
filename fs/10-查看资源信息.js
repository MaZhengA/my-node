const fs = require('fs');

// 查看文件的状态 stat: status;
fs.stat('./观书有感.txt', (err, data) => {
  if (err) {
    return;
  }
  console.log(data)
  console.log(data.isFile()) // 检测是否是文件
  console.log(data.isDirectory()) // 检测是否是文件夹
})