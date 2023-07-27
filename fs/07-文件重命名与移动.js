const fs = require('fs');

// 重命名
// fs.rename('./座右铭.txt', './论语.txt', err => {
//   if (err) {
//     console.log('操作失败')
//     return;
//   }
// })

// 移动
fs.rename('./论语.txt', './文件夹/论语.txt', err => {
  if (err) {
    console.log(err, '操作失败')
    return;
  }
})

// fs.renameSync可以实现相同的效果，区别在于没有后边的回调函数