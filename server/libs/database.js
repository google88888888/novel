//cmd mysql -uroot -p
//mysql>source  F:/hello world/niuzi.sql
var mysql = require('mysql')
var mysqlDatabase = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '911888mjxok'
  });
mysqlDatabase.connect()


mysqlDatabase.query('use novel', function(err) {
    if (err) {
        throw err;
    }
    mysqlDatabase.query('create table if not exists testTable (phone varchar(20), email varchar(20), created_at Date)')
})

module.exports = mysqlDatabase;