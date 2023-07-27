const fs = require('fs');

const files = fs.readdirSync('../my-node');
files.forEach(item => {
  // 拆分文件名
  let data = item.split('-');
  if (Number(data[0]) < 10) {
    // 重命名
    fs.renameSync('./'+ item, './0' + item);
  }
})