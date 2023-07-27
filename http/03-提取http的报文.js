// 1. 导入http对象
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求的方法
  // console.log(request.method)

  // 获取请求的url
  // console.log(request.url) // 只包含路径和查询字符串，不包含协议、ip、端口

  // 获取http协议的版本号
  // console.log(request.httpVersion)

  // 获取http的请求头
  console.log(request.headers)
  response.end('http'); 
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动')
})