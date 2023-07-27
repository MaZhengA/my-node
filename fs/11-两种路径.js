const fs = require('fs');

// 相对路径
// fs.writeFileSync('./index.html', 'love');
// fs.writeFileSync('index.html', 'love');

// 绝对路径 /user/xxx
fs.writeFileSync('/Users/mazheng/Desktop/my-node/index.html', 'love');