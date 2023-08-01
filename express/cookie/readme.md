### session 和 cookie 的区别
1. 存储位置
   - cookie: 浏览器
   - session: 服务端
2. 安全性
   - cookie: 明文形式存放客户端
   - session: 存放服务器，安全性相对较好
3. 网络传输量
   - cookie: 设置内容太多时会增加报文体积，影响传输效率
   - session: 存储在服务器，通过cookie传输id，不影响效率
4. 存储限制
   - cookie: 不能超过4k，单个域名下的存储数量也有限
   - session: 存在服务器，没有任何限制