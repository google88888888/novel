//cmd mysql -uroot -p
var mysql = require('mysql')
var mysqlDatabase = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '911888mjxok'
  });
mysqlDatabase.connect()
mysqlDatabase.query('create database if not exists test', function(err) {
    if (err) {
        throw err;
    }
    mysqlDatabase.query('use test', function(err) {
        if (err) {
            throw err;
        }
        mysqlDatabase.query('create table if not exists testTable (phone varchar(20), email varchar(20), created_at Date)')
    })
})
module.exports = mysqlDatabase;