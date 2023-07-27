// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/home', (req, res) => {
  res.send('hello world')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

