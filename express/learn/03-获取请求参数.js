// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/request', (req, res) => {
  // 原生操作
  console.log(req.method)
  
  // express 操作
  console.log(req.path)

  // 获取 ip
  console.log(req.ip)

  // 获取单独的请求头
  console.log(req.get('host'))
  res.send('hello world')
});


app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

