var express = require('express');
var router = express.Router();
var mysqlDatabase = require('../libs/database');
var multer  = require('multer');
var fs = require('fs');
var https = require('https');
var qs = require('querystring');
var nodeExcel = require('excel-export');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })  ;

router.post('/upload', upload.single("image11"), function(req, res, next) {  
  //文件路径  
  console.log("req.file.fieldname是"+req.file.fieldname);
  console.log("req.file.originalname是"+req.file.originalname);
  console.log("req.file.encoding是"+req.file.encoding);
  console.log("req.file.mimetype是"+req.file.mimetype);
  console.log("req.file.size是"+req.file.size);
  console.log("req.file.destination是"+req.file.destination);
  console.log("req.file.filename是"+req.file.filename);
  console.log("req.file.path是"+req.file.path);
  console.log("req.file.buffer是"+req.file.buffer);

  res.json({
      message: "success",
      user: 'mjx' 
    }) 
});  

router.post('/getUserName', function(req, res, next) {
  res.json({ user: 'tobi' })
});

router.post('/postFile', upload.single("fileBinaryString"),  function(req, res, next) {

  console.log("req.file.fieldname是"+req.file.fieldname);
  console.log("req.file.originalname是"+req.file.originalname);
  console.log("req.file.encoding是"+req.file.encoding);
  console.log("req.file.mimetype是"+req.file.mimetype);
  console.log("req.file.size是"+req.file.size);
  console.log("req.file.destination是"+req.file.destination);
  console.log("req.file.filename是"+req.file.filename);
  console.log("req.file.path是"+req.file.path);
  console.log("req.file.buffer是"+req.file.buffer);

  console.log("req.body.fileName11111111111111111111111111111是"+req.body.fileName);
    
    res.json({
      message: "success",
      user: 'mjx' 
    })
});

router.post('/testDatabase', function(req, res, next) {

    mysqlDatabase.query("create table hehe(id int  not null  auto_increment,name varchar(60) default '名字haha',primary key(id) )engine=InnoDB,charset=utf8;", 
                         [], 
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

router.post('/intertHundred', function(req, res, next) {
    
    new Promise(function(resolve, reject) {
        for(let i=1;i<101;i++){
            mysqlDatabase.query('INSERT INTO hehe(name,address) VALUES(?,?)', 
                                [i+"name",i+"address"], 
                                function(error, results, fields){
            })
        }
        resolve();

    }).then(function(value) {
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

const disableLayout ={layout: false};
// disable interface layout.hbs  user config layout: false
router.get('/exportExcel', function(req, res, next) {

    var conf ={};     
    conf.stylesXmlFile = "excelStyles.xml";
    
    conf.name = "mysheet";
    conf.cols = [{
        caption:'string',
        type:'string',
        beforeCellWrite:function(row, cellData){
            return cellData.toUpperCase();
        },
        width:28.7109375
    },{
        caption:'date',
        type:'date',
        beforeCellWrite:function(){
            var originDate = new Date(Date.UTC(1899,11,30));
            return function(row, cellData, eOpt){
                if (eOpt.rowNum%2){
                    eOpt.styleIndex = 1;
                }
                else{
                    eOpt.styleIndex = 2;
                }
                if (cellData === null){
                    eOpt.cellType = 'string';
                    return 'N/A';
                } else
                    return (cellData - originDate) / (24 * 60 * 60 * 1000);
            }
        }()
    },{
        caption:'bool',
        type:'bool'
    },{
        caption:'number',
        type:'number'
    }];
    conf.rows = [
        ['pi', new Date(Date.UTC(2013, 4, 1)), true, 3.14],
        ["e", new Date(2012, 4, 1), false, 2.7182],
        ["M&M<>'", new Date(Date.UTC(2013, 6, 9)), false, 1.61803],
        ["null date", null, true, 1.414]
    ];
    var result = nodeExcel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    res.end(result, 'binary');

});


module.exports = router;
