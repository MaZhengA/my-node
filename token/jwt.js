// 导入jwt
const jwt = require('jsonwebtoken');
// 创建token
// jwt.sign(用户数据，加密字符串，配置对象)
// const token = jwt.sign(
//   { username: 'mazheng' }, 
//   'shuai',
//   { expiresIn: 600 } // 声明周期，单位是s
// );
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hemhlbmciLCJpYXQiOjE2OTA5NDIyMjUsImV4cCI6MTY5MDk0MjgyNX0.TAYXQixC5mjsE-lFqWNZr8tKGnwvY1_oOh86tSqRNvM';

jwt.verify(t, 'shuai', function(err, decoded) {
  if (err) {
    console.log(err);
    console.log('校验失败～～');
    return;
  }
  console.log(decoded);
})

// console.log(token);