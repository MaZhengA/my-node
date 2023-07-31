// 1. 导入fs模块
const fs = require('fs');

// 2. 创建写入流对象
const ws = fs.createWriteStream('./横渠四句.txt');

// 3. write
ws.write('为天地立心\r\n');
ws.write('为生民立命\r\n');
ws.write('为往圣继绝学\r\n');
ws.write('为万世开太平\r\n');