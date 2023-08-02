
const jwt = require('jsonwebtoken');
const { secert } = require('../config/config');

module.exports = (req, res, next) => {
  // 获取 token
  let token = req.get('token');
  if (!token) {
    return res.json({
      code: '2003',
      msg: 'token缺失',
      data: null
    })
  }
    
  // 检验token
  jwt.verify(token, secert, (err, decode) => {
    if (err) {
      return res.json({
        code: '2004',
        msg: 'token校验失败～',
        data: null
      })
    }
    // 如果成功，保存用户信息
    req.user = decode;
    next()
  })
}