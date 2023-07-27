// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/home', (req, res) => {
  res.send('hello world')
});

app.get('/', (req, res) => {
  res.send('首页')
})

app.post('/login', (req, res) => {
  res.send('登陆')
})

app.all('/test', (req, res) => {
  res.send('test');
})

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

