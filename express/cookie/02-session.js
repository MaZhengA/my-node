const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// 设置 session 中间件
app.use(session({
  name: 'sid', // 设置 cookie 的 name
  secret: 'keyboard cat', // 参与加密的字符串
  saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id 
  resave: true, // 是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 5 // 控制session的过期时间
  }
}))

app.get('/', (req, res) => {
  res.send('home');
})

// 登陆
app.get('/login', (req, res) => {
  if (req.query.username === 'admin' && req.query.password === 'admin') {
    req.session.username = 'admin';
    req.session.password = '123456';
    res.send('登陆成功');
  } else {
    res.send('登陆失败')
  }
})

// session 的读取
app.get('/cart', (req, res) => {
  // 检测session是否存在session数据
  if (req.session.username) {
    res.send(`购物车页面 ${req.session.username}`)
  } else {
    res.send('您还没有登陆');
  }
})

// session 的销毁
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('您已退出登陆')
  })
})

app.listen(3000)