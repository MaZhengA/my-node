// 方式一 readFile
// const fs = require('fs');
// const process = require('process');

// const readFs = fs.readFileSync('./座右铭.txt');

// fs.writeFileSync('./座右铭copy.txt', readFs);
// 查看内存占用量
// console.log(process.memoryUsage()); 

// 方式二 流式操作
// 这种方式更好一些，每次读写需要的内存空间更小。
const fs = require('fs');

const rs = fs.createReadStream('./观书有感.txt');

const ws = fs.createWriteStream('./观书有感copy.txt');

rs.on('data', chunk => {
  ws.write(chunk);
})

rs.on('end', () => {
  console.log(process.memoryUsage());
})