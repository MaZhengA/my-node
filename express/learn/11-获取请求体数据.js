const express = require('express');
var bodyParser = require('body-parser')

// 创建应用对象
const app = express();

// 创建路由
app.get('/login', (req, res) => {
  // 响应文件内容
  res.sendFile(__dirname + '/11-form.html')
  // res.send('表单页面')
})

// 解析 json 格式中间件
var jsonParser = bodyParser.json()
// 解析 querystring 格式请求体的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })
console.log(urlencodedParser)
console.log(jsonParser)
app.post('/login', urlencodedParser, (req, res) => {
  // 获取用户数据
  console.log(req.body)
  res.send(`用户名：${req.body.username}, 密码：${req.body.password}`)
})

app.listen(3000, () => {
  console.log('服务器开启了')
})