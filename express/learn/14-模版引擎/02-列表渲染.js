// xiyou
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];

// 原生实现
// let str = "<ul>";

// xiyou.forEach((item) => {
//   str += `<li>${item}</li>`
// });

// str += "</ul>";

// ejs实现
const ejs = require('ejs');
const fs = require('fs');
let html = fs.readFileSync('./02-西游.html').toString();
let result = ejs.render(html, {xiyou: xiyou})
console.log(result)