var express = require('express');
var router = express.Router();

const dayjs = require('dayjs');
const AccountModel = require('../../models/AccountModel');

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  // 获取所有的账单信息
  // let accounts = db.get('accounts').value();

  // 读取集合信息
  let promise = AccountModel.find().sort({time: -1}).exec();
  promise.then(data => {
    // 成功的渲染
    // res.render('list', { accounts: data, dayjs })
    res.json({
      code: '0000',
      msg: '读取成功',
      data
    })
  }).catch(err => {
    res.json({
      code: '1001',
      msg: '读取失败',
      data: null
    })
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
    res.json({
      code: '0000',
      msg: '创建成功',
      data
    })
  }).catch(err => {
    res.json({
      code: '1002',
      msg: '创建失败',
      data
    })
    return;
  })
})

// 删除
router.delete('/account/:id', (req, res) => {
  let id = req.params.id;
  // db.get('accounts').remove({id: id}).write();
  let promise = AccountModel.deleteOne({_id: id});
  promise.then(() => {
    res.json({
      code: '0000',
      msg: '删除成功',
      data: {}
    })
  }).catch(err => {
    res.json({
      code: '1003',
      msg: '删除失败',
      data: null
    })
    return;
  })
})

// 获取单个账单信息
router.get('/account/:id', (req, res) => {
  let id = req.params.id;
  let promise = AccountModel.findById(id);

  promise.then(() => {
    res.json({
      code: '0000',
      msg: '读取成功',
      data: {}
    })
  }).catch(err => {
    res.json({
      code: '1004',
      msg: '读取失败',
      data: null
    })
    return;
  })
})

// 更新账单
router.patch('/account/:id', (req, res) => {
  let id = req.params.id;
  let promise = AccountModel.updateOne({_id: id}, req.body);

  promise.then((data) => {
    // 再次查询数据库，获取单条数据
    AccountModel.findById({_id: id}).then(data => {
      res.json({
        code: '0000',
        msg: '更新成功',
        data
      })
    })
  }).catch(err => {
    res.json({
      code: '1005',
      msg: '更新失败',
      data: null
    })
    return;
  })
})

module.exports = router;
