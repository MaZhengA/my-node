// 如果导入路径是文件夹，则首先会检测该文件夹下 package.json 文件中 main 属性对应的文件
// 如果存在则导入，反之不存在则报错
// 如果 main 不存在或 package.json 不存在，则会导入该文件夹下的 index.js 或 index.json
const m = require('./module');

console.log(m);