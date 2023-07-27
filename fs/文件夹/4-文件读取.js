const fs = require('fs');

// 异步读取
fs.readFile('./观书有感.txt', (err, data) => {
  if (err) {
    console.log('读取失败')
  } else {
    // 打印出的是 buffer , 因此要通过 toString 转换
    console.log(data.toString())
  }
})

// 通过读取
const data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());