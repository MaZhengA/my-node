// 1. 导入http对象
const http = require('http');
const fs = require('fs');

// 2. 创建服务对象
const data = fs.readFileSync(__dirname+ '/09-table.html');

const server = http.createServer((request, response) => {
  // 无需重启，只需要刷新页面再次请求就能拿到新数据
  response.end(data); // 设置响应体
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动')
})