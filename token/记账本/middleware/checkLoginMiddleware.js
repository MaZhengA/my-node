module.exports = (req, res, next) => {
  // 判断，没有登陆返回login页
  if (!req.session.username) {
    return res.redirect('/login')
  }
  next();
}