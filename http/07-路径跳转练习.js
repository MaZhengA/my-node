const http = require('http');

const server = http.createServer((request, response) => {

  response.setHeader('content-type', 'text/html;charset=utf-8');
  
  let method = request.method;
  
  let url = new URL(request.url, 'http://127.0.0.1:9000');

  let pathname = url.pathname;

  console.log(method)
  console.log(pathname)

  if (method === 'GET') {
    if (pathname === '/login') {
      response.end('登陆页面')
    } else if (pathname === '/reg') {
      response.end('注册页面')
    } else {
      response.end('Not Found')
    }
  }
  // 不能同时有两个response.end
  // response.end('http');
})

server.listen(9000, () => {
  console.log('服务已启动')
})