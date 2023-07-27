// 导入express
const express = require('express');

// 创建应用对象
const app = express();
const port = 3000;

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的 referer 是否是127.0.0.1
  const referer = req.get('referer');
  console.log(referer)
  if (referer) {
    let url = referer && new URL(referer);
    let hostname = url.hostname;
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 Not Found</h1>')
      return;
    }
  }
  next()
})

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));


app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

