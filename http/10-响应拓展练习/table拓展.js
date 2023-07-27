// 1. 导入http对象
const http = require('http');
const fs = require('fs');

// 2. 创建服务对象

const server = http.createServer((request, response) => {
  
  // 获取路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1:9000');
  
  if (pathname === '/') {
    let html = fs.readFileSync('./table.html');
    response.end(html);
  } else if (pathname === '/table.css') {
    let css = fs.readFileSync('./table.css');
    response.end(css)
  } else if (pathname === '/table.js') {
    let js = fs.readFileSync('./table.js');
    response.end(js)
  } else {
    response.end('<h1>Not Found</h1>')
  }
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动')
})