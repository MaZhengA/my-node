const http = require('http');

const fs = require('fs');

const path = require('path');

const server = http.createServer((request, response) => {
  response.setHeader('content-type', "text/html;charset=utf-8");

  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.end('<h1>405 Method Not Allowed</h1>');
  }
  
 
  let { pathname } = new URL(request.url, 'http://127.0.0.1');

  let root = __dirname + '/page';
  let filePath = root + pathname; 
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
      // 判断错误代码
      switch(err.code) {
        case 'ENOENT':
          response.statusCode = 404; // 找不到页面
          response.end('<h1>404 Not Found</h1>');
        case 'EPERM':
          response.statusCode = 403; // 没有权限
          response.end('<h1>403 Not Forbidden</h1>');
        default: 
          response.statusCode = 500;
          response.end('<h1>Internal Server Error</h1>');
      }
      return;
    }
    // 获取文件的后缀名
    let ext = path.extname(filePath);
    // console.log(ext)
    response.end(data);
  })
});

server.listen(9000, () => {
  console.log('服务已启动')
})