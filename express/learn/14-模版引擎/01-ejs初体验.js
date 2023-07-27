const ejs = require('ejs');

// 字符串
let china = "中国";

// 声明变量
let str = '我爱你 <%= china %>';

// 使用 ejs 渲染
let render = ejs.render(str, {china: china});

console.log(render)