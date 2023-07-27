const express = require('express');
const path = require('path');

const app = express();
// 1. 设置模版引擎
app.set('view engine', 'ejs');
// 2. 设置模版文件存放位置
app.set('views', path.resolve(__dirname + '/views'));

app.get('/home', (req, res) => {
  // 3. render 响应
  let title = '马铮 全天下没有比他更帅的男人';
  res.render('home', { title });
});

app.listen(3000, () => {
  console.log('服务启动了')
})