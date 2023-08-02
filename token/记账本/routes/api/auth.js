var express = require('express');
const jwt = require('jsonwebtoken');

var router = express.Router();

const UserModel = require('../../models/UserModel');
const { secert } = require('../../config/config');

// 登陆操作
router.post('/login', (req, res) => {
  // 查询数据库
  let { username, password } = req.body;
  UserModel.findOne({ username, password }).then(data => {
    if (!data) {
      return res.json({
        code: '2002',
        msg: '账号或密码错误',
        data: null
      })
    }
    // 创建当前用户token
    let token = jwt.sign(
      { 
        username: data.username, 
        _id: data.id
      }, 
      secert,
      { expiresIn: 600 } // 声明周期，单位是s
    );
    // 响应token
    res.json({
      code: '0000',
      msg: '登陆成功',
      data: token
    })
    res.render('success', { msg: '登陆成功', url: '/account' })
  }).catch(err => {
    res.json({
      code: '2001',
      msg: '数据库读取失败',
      data: null
    })
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
