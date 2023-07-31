var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

// 唯一的id
const shortid = require('shortid')

const dayjs = require('dayjs');
const AccountModel = require('../models/AccountModel');

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  // 获取所有的账单信息
  // let accounts = db.get('accounts').value();

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
router.get('/account/create', function(req, res, next) {
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
router.get('/account/:id', (req, res) => {
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
