// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/other', (req, res) => {
  // 跳转响应
  // res.redirect('http://www.baidu.com')
  // 下载响应
  // res.download(__dirname + '/singer.json')
  // json响应
  // res.json({
  //   name: '马铮',
  //   slogon: '帅气'
  // })
  // 响应文件内容
  res.sendFile(__dirname + '/singer.json')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

