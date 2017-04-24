var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var login = require('./routes/login');
var index = require('./routes/index');
var look = require('./routes/look');
var ftp = require('./routes/ftp');
var change = require('./routes/change');
var replace = require('./routes/replace');
var tihuan = require('./routes/tihuan');
var svn = require('./routes/svn');
var logout = require('./routes/logout');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'kk', // 设置 cookie 中保存 session id 的字段名称
    secret: 'kk', // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    cookie: {
        maxAge: 2592000000 // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    resave: false,
    saveUninitialized: true,
    //store: new MongoStore({// 将 session 存储到 mongodb
    //url: 'mongodb://localhost:27017/kk'// mongodb 地址
    //})
}));

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.city = req.session.city;
    next();
});

app.use('/', index);
app.use('/login', login);
app.use('/ftp', ftp);
app.use('/look', look);
app.use('/change', change);
app.use('/replace', replace);
app.use('/tihuan', tihuan);
app.use('/svn', svn);
app.use('/logout', logout);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
