const express = require('express');

const cookieParser = require('cookie-parser')

// cookie可实现跨浏览器共享
const app = express();
app.use(cookieParser())

// 创建路由规则
app.get('/set-cookie', (req, res) => {
  // res.cookie('name', 'mazheng') // 浏览器关闭时销毁
  res.cookie('name', 'houjingjing', { maxAge: 60 * 1000 }) // 不在当前路径时，1 分钟后过期（例如7天后过期等功能）
  res.cookie('hobby', 'play')
  res.send('home')
});

// 删除 cookie
app.get('/remove-cookie', (req, res) => {
  // 应用场景：用户退出登录时清除cookie，清除后，响应报文的过期时间会是1970
  res.clearCookie('hobby')
  res.send('删除成功')
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies)
  res.send('获取cookie')
})

app.listen(3000, () => {
  console.log('服务启动了');
})