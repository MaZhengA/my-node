const fs = require('fs');

// 相对路径参照物：参照命令行的目录，例如命令行目录在desktop
// 例如：Desktop node my-node/12-相对路径的bug与解诀.js ，这时会在桌面新建一个index.html文件
fs.writeFileSync('./index.html', 'love');

// 绝对路径 ‘全局变量‘ 保存的是：所在文件的所在目录的绝对路径
console.log(__dirname);
// 例如当前命令行目录在desktop，__dirname 是 /Users/mazheng/Desktop/my-node
fs.writeFileSync(__dirname + '/index.html', 'love');