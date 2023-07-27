// 1. 导入http对象
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 1. 设置响应状态码
  // response.statusCode = 203;

  // 2. 响应状态描述
  // response.statusMessage = '成功'

  // 3. 响应头
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.setHeader('Server', 'Node.js');

  response.end('Hello Http Server'); 
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动')
})