// 导入express
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');

// 创建应用对象
const app = express();
const router = express.Router()

app.use(homeRouter)
app.use(adminRouter)

const port = 3000;

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
});

app.listen(port, () => { 
  console.log(`端口是 ${port}`)
})

