// 导入express
const express = require('express');
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();
const port = 3000;

// 声明一个中间件函数
function recordMiddleware(req, res, next) {
  // 获取 url 和 ip 
  let { url, ip } = req;
  // 将信息保存在access.log文件中
  fs.appendFileSync(path.resolve(__dirname + '/access.log'), `${url} ${ip}\r\n`);
  next()
}

// 使用中间件
app.use(recordMiddleware)

// 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
});

app.get('/admin', (req, res) => {
  res.send('后台首页')
});

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

