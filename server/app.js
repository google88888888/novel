// 启动应用
// DEBUG=myapp:* npm start
// 到novelServer目录执行pm2 start ./bin/www 
// pm2 stop all
//ps -ef | grep node 查看node进程
//kill 进程pid
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// app.post('/postFile', function(req, res, next) {
//     var file = req.files;
//     console.log("file.upload.path是"+file.upload.path);
//     console.log("file.upload.originalname是"+file.upload.originalname);
//     fs.renameSync(file.upload.path,"/public/"+file.upload.originalname);

    
//     res.json({
//       message: "success",
//       user: 'mjx' 
//     })
// });

app.use('/', index);

app.use('/', function(req, res, next) {
  res.redirect('http://www.jiangnanduanpian.com/theIndex.html');
});
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
