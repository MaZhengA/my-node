const http = require('http');

const server = http.createServer((request, response) => {
  // 实例化 URL 对象 new URL(url, base)
  // url: 一个表示绝对或相对 URL 的 DOMString 或任何具有字符串化方法的对象
  // base: 一个表示基准 URL 的字符串，当 url 为相对 URL 时，它才会生效
  let url = new URL(request.url, 'http://127.0.0.1:9000');
  // console.log(url)
  // 输出查询字符串
  let name = url.searchParams.get('name');
  console.log(name)
  response.end('new url')
});

server.listen(9000, () => {
  console.log('服务启动了')
})