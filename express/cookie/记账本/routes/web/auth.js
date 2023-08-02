var express = require('express');
var md5 = require('md5');

var router = express.Router();

const UserModel = require('../../models/UserModel');

// 注册
router.get('/reg', (req, res) => {
  // 响应html
  res.render('auth/reg');
})

// 注册用户
router.post('/reg', (req, res) => {
  // 做表单验证
  // 获取请求体数据
  let promise = UserModel.create({
    ...req.body,
    password: md5(req.body.password)
  })

  promise.then(data => {
    res.render('success', { msg: '注册成功', url: '/login' })
  }).catch(err => {
    res.status(500).send('注册失败，请稍后重试~')
    return;
  })
})

// 登陆
router.get('/login', (req, res) => {
  // 响应html
  res.render('auth/login');
})

// 登陆操作
router.post('/login', (req, res) => {
  // 查询数据库
  let { username, password } = req.body;
  UserModel.findOne({ username, password }).then(data => {
    if (!data) {
      return res.send('账号或密码错误')
    }
    req.session.username = data.username;
    req.session._id = data._id;
    res.render('success', { msg: '登陆成功', url: '/account' })
  }).catch(err => {
    console.log(err)
    res.status(500).send('登陆失败，请重试~')
    return;
  })
})

// 退出登录
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('success', { msg: '退出成功', url: '/login' })
  })
})

module.exports = router;
