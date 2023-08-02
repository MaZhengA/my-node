const express = require('express');
const dayjs = require('dayjs');
const AccountModel = require('../../models/AccountModel');

const router = express.Router();
// 登陆鉴权
const checkLoginMiddleware = require('../../middleware/checkLoginMiddleware');

// 添加首页的路由规则
router.get('/', (req, res) => {
  res.redirect('/account')
})

/* 记账本列表 */
router.get('/account', checkLoginMiddleware, function(req, res, next) {
  // 读取集合信息
  let promise = AccountModel.find().sort({time: -1}).exec();
  promise.then(data => {
    // 成功的渲染
    res.render('list', { accounts: data, dayjs })
  }).catch(err => {
    console.log(err)
    res.status(500).send('读取失败');
    return;
  })
});

// 添加记录
router.get('/account/create', checkLoginMiddleware, function(req, res, next) {
  res.render('create')
});

// 新增记录
router.post('/account', (req, res) => {
  // 查看表单数据
  // 插入数据库
  let promise = AccountModel.create({
    ...req.body,
    // 修改 time 的类型
    time: dayjs(req.body.time).toDate()
  })

  promise.then((data) => {
    res.render('success', { msg: '添加成功', url: '/account' });
  }).catch(err => {
    console.log(err)
    res.status(500).send('插入失败');
    return;
  })
  // 写入文件
  // db.get('accounts').unshift({id: shortid.generate(), ...req.body}).write()
})

// 删除
router.get('/account/:id', checkLoginMiddleware, (req, res) => {
  let id = req.params.id;
  // db.get('accounts').remove({id: id}).write();
  let promise = AccountModel.deleteOne({_id: id});
  promise.then(() => {
    res.render('success', { msg: '删除成功', url: `/account` })
  }).catch(err => {
    res.status(500).send('删除失败');
    return;
  })
})


module.exports = router;
