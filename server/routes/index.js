var express = require('express');
var router = express.Router();
var mysqlDatabase = require('../libs/database');
var fs = require('fs');
var https = require('https');
var qs = require('querystring');

router.post('/getData', function(req, res, next) {
    
    let pageOptions={
        page:req.body.page,
        pageSize:req.body.pageSize,
    };
    let searchOptions={
        type:req.body.type==0?'':req.body.type, 
        title:req.body.title,
        author:req.body.author, 
    };
    let  offset=parseInt(pageOptions.page)*parseInt(pageOptions.pageSize);
    mysqlDatabase.query('select * from novel where type like "%'+searchOptions.type
                       +'%" and (title like "%'+searchOptions.title
                       +'%" or author like "%'+searchOptions.author
                       +'%" ) limit '+offset
                       +' , '+pageOptions.pageSize, 
                       [],function(error, results, fields){
        let returnAllData=[];
        if(error) {
            throw error;
        }else {
            for(let i=0;i<results.length;i++){
                    let returnItemData={
                        type: results[i].type,
                        id:results[i].id,
                        title: results[i].title,
                        author: results[i].author,
                    }
                    // 目前使用同步方法，异步方法待研究。
                    let data=fs.readFileSync(results[i].content_link,'utf-8');
                    var content=data.split(/\r\n/g);
                    for(let i=0;i<content.length;i++){
                        content[i]=content[i].trim();
                    }	
                    returnItemData.content=content;
                    returnAllData.push(returnItemData);
            }

        }
        res.json({
            code:200,
            msg: "success",
            data:returnAllData,
        })
    })
});

router.post('/getSpecifyData', function(req, res, next) {
    mysqlDatabase.query('select * from novel where id ='+req.body.id, 
                       [],function(error, results, fields){

        let returnItemData;
        if(error) {
            throw error;
        }else {
            returnItemData={
                type: results[0].type,
                id:results[0].id,
                title: results[0].title,
                author: results[0].author,
            }
            // 目前使用同步方法，异步方法待研究。
            let data=fs.readFileSync(results[0].content_link,'utf-8');
            var content=data.split(/\r\n/g);	
            returnItemData.content=content;
        }
        res.json({
            code:200,
            msg: "success",
            data:returnItemData,
        })
    })
    
});

router.post('/getCatalog', function(req, res, next) {
    let returnAllData=[{
        type: 1,
        content: []
    },{
        type: 2,
        content: []
    },{
        type: 3,
        content: []
    },{
        type: 4,
        content: []
    }];

    let pageOptions={
        page:0,
        pageSize:5,
    };
    let  offset=parseInt(pageOptions.page)*parseInt(pageOptions.pageSize);
    
    let promiseType1=new Promise(function(resolve,reject){
        mysqlDatabase.query('select id  , title , author   from novel where type = 1'
                        +' limit '+offset
                        +' , '+pageOptions.pageSize, 
                        [],function(error, results, fields){
            if(error) {
                throw error;
            }else {
                returnAllData[0].content=results;
                resolve();
            }

        })
    })
    let promiseType2=new Promise(function(resolve,reject){
            mysqlDatabase.query('select id  , title , author   from novel where type = 2'
                            +' limit '+offset
                            +' , '+pageOptions.pageSize, 
                            [],function(error, results, fields){
                if(error) {
                    throw error;
                }else {
                    returnAllData[1].content=results;
                    resolve();

                }

            })
    })
    let promiseType3=new Promise(function(resolve,reject){
            mysqlDatabase.query('select id  , title , author   from novel where type = 3'
                            +' limit '+offset
                            +' , '+pageOptions.pageSize, 
                            [],function(error, results, fields){
                if(error) {
                    throw error;
                }else {
                    returnAllData[2].content=results;
                    resolve();
                }

            })
    })
    let promiseType4=new Promise(function(resolve,reject){
            mysqlDatabase.query('select id  , title , author   from novel where type = 4'
                            +' limit '+offset
                            +' , '+pageOptions.pageSize, 
                            [],function(error, results, fields){
                if(error) {
                    throw error;
                }else {
                    returnAllData[3].content=results;
                    resolve();
                }
            })
    })
    Promise.all([promiseType1, promiseType2, promiseType3, promiseType4])
    .then(() => {
        res.json({
            code:200,
            msg: "success",
            data:returnAllData,
        })
    })









});


module.exports = router;
