// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/:id.html', (req, res) => {
  // 获取 URL 请求参数
  console.log(req.params.id)
  res.send('hello world')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

