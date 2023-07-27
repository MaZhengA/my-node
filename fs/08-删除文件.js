const fs = require('fs');

// 第一种
// fs.unlink('./观书有感copy.txt', err => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功')
// })

fs.rm('./座右铭copy.txt', err => {
  if (err) {
    console.log('删除');
    return;
  }
  console.log('删除成功')
})