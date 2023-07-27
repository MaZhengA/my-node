const fs = require('fs');

// 创建文件夹 mk: make dir: directory 目录
// fs.mkdir('./html', err => {
//   if (err) {
//     console.log('创建失败')
//     return;
//   }
//   console.log('创建成功')
// })

// 递归创建 recursive: 递归
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//   if (err) {
//     console.log('创建失败')
//     return;
//   }
//   console.log('创建成功')
// })

// 读取文件夹
// fs.readdir('./a/b', (err, data) => {
//   if (err) {
//     console.log('创建失败')
//     return;
//   }
//   console.log(data)
// })

// 删除文件夹
// node 官方不建议使用 recursive
// fs.rmdir('./a', { recursive: true }, err => {
//   if (err) {
//     console.log('删除失败')
//     return;
//   }
// })

// node 建议使用 rm
fs.rm('./a', { recursive: true }, err => {
  if (err) {
    console.log('删除失败')
    return;
  }
})