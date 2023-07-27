const fs = require('fs');

const files = fs.readdirSync('./文件夹');
files.forEach(item => {
  // 拆分文件名
  let data = item.split('-');
  console.log(data, 'data==')
  // if (Number(data[0]) < 6) {
  //   // 重命名
  //   fs.renameSync('./'+ item, './0' + item);
  // }
})