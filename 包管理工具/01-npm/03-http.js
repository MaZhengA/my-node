const http = require('http');

const server = http.createServer((request, response) => {
  response.end('响应结果')
});

server.listen(9000, () => {
  console.log('服务启动了')
})