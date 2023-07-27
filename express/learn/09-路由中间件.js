// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const router = express.Router()

const port = 3000;

// 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
});

// 声明中间件
let checkCodeMiddleware = (req, res, next) => {
  // 判断 url 的 code 参数
 if (req.query.code === '521') {
    next();
  } else {
    res.send('暗号错误')
  }
};

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页')
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置页面')
});

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

