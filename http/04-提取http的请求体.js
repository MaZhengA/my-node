// 1. 导入http对象
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 1. 声明一个变量
  let body = '';
  // 2. 绑定事件
  request.on('data', chunk => {
    body += chunk;
  })
  // 3. 绑定一个end事件(必须的是post请求才能有请求体)
  request.on('end', () => {
    console.log(body)
    response.end('http')
  })
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动')
})