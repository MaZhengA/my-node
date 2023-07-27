/**
 * 通过 isLogin 决定最终输出内容
 * true <span>欢迎回来</span>
 * false <button>登录</button> <button>注册</button>
 */

const ejs = require('ejs');
const fs = require('fs');

let isLogin = true;

const html = fs.readFileSync('./03-条件渲染.html').toString();
const result = ejs.render(html, {isLogin: isLogin});
console.log(result)