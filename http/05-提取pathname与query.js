const http = require('http');

// 1. 导入url模块
const url = require('url');

const server = http.createServer((request, response) => {
  // 2. 解析url
  // http://127.0.0.1:9000/search?name=456
  // true可以把查询字符串输出成对象
  let res = url.parse(request.url, true);
  // console.log(res)
  // 路径
  let pathname = res.pathname;
  // 查询字符串
  let query = res.query.name;
  response.end('url')
})

server.listen(9000, () => {
  console.log('服务已启动')
})