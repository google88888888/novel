var express = require('express');
var router = express.Router();
var mysqlDatabase = require('../libs/database');
var fs = require('fs');
var https = require('https');
var qs = require('querystring');




router.post('/getUserName', function(req, res, next) {
  res.json({ user: 'tobi' })
});



router.post('/getDatabase', function(req, res, next) {

    console.log("req.url是"+req.url);

    console.log("req.body.haha是"+req.body.haha);
    console.log("req.body.nini是"+req.body.nini);

    mysqlDatabase.query('INSERT INTO testTable(phone,email) VALUES(?,?)', 
                         [req.body.haha,req.body.nini], 
                         function(error, results, fields){
        if(error) {
            res.json({
              message: "success",
              user: 'mjx' 
            })
            throw error;
        }
        res.json({
          message: "success",
          user: 'mjx' 
        })
    })


});


router.post('/page', function(req, res, next) {
    
    console.log("req.url是"+req.url);

    console.log("req.body.offset是"+req.body.offset);
    console.log("req.body.rows是"+req.body.rows);

    mysqlDatabase.query('select * from hehe limit '+req.body.offset+' , '+req.body.rows, [],
                         function(error, results, fields){
        console.log(results);
        if(error) {
            res.json({
              message: "success",
              user: 'mjx', 
              results:results 
            })
            throw error;
        }
        res.json({
          message: "success",
          user: 'mjx', 
          results:results
        })
    })

});


module.exports = router;
