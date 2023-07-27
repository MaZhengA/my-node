// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 创建路由
app.get('/response', (req, res) => {

  // res.status(500);
  // res.set('aaa','bbb');
  // res.send('你好 express')
  res.status(500).set('aaa', 'bbb').send('你好 express')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

