var express = require('express');
var formidable = require('formidable');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/sheet', (req, res) => {
  res.render('sheet')
})
console.log(__dirname + '/../public/images')
// 处理文件上传
router.post('/sheet', (req, res) => {
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // 服务器保存图片的访问 url
    let url = '/images/' + files.sheet.newFilename; // 将图片保存在数据库中
    res.send(url);
    // res.json({ fields, files });
  });
})

module.exports = router;
