// 1. 引入fs
const fs = require('fs');

// 2. 调用appendFile
// fs.appendFile('./座右铭.txt', ',择其善者而从之，其不善者而改之', err => {
//   if (err) {
//     console.log('写入失败');
//     return;
//   }
//   console.log('写入成功')
// })

// 3. 调用appendFileSync
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣')

// 4. 调用writeFile实现
fs.writeFile('./座右铭.txt', '\r\n学而不思则罔，思而不学则殆', { flag: 'a' }, err => {
  if (err) {
    console.log('写入失败')
    return;
  }
  console.log('写入成功')
})