// 导入express
const express = require('express');
const { singers } = require('./singer.json');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/singer/:id.html', (req, res) => {
  // 获取 URL 请求参数
  // res.setHeader('content-type',"text/html:charset=utf-8")s
  let { id } = req.params;

  let result = singers.find(item => {
    if (item.id === id) {
      return true
    }
  })

  if (!result) {
    res.statusCode = 404;
    res.statusMessage = "未找到相关内容";
    return;
  }
  console.log(result, 'result==')
  res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.name}</h2>
    </body>
    </html>`)
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

