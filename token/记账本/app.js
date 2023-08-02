var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const MongoStore = require('connect-mongo');

var indexRouter = require('./routes/web/index');

// 导入 account 接口路由文件
const accountRouter = require('./routes/api/account');

const regRouter = require('./routes/web/auth');

const authApiRouter = require('./routes/api/auth');

const { DBHOST, DBPORT, DBNAME } = require('./config/config');

var app = express();

// 设置 session 中间件，必须写在app.use(router)之前，否则不会被调用
app.use(session({
  name: 'sid', // 设置 cookie 的 name
  secret: 'keyboard cat', // 参与加密的字符串
  saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id 
  resave: true, // 是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 60 * 24 * 7 // 控制session的过期时间
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.use('/', regRouter)

app.use('/api', accountRouter)

app.use('/api', authApiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  // 响应404
  res.render('404')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
