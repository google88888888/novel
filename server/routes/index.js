var express = require('express');
var router = express.Router();
var mysqlDatabase = require('../libs/database');
var fs = require('fs');
var https = require('https');
var qs = require('querystring');

router.post('/getData', function(req, res, next) {
  res.json({
    code: 200,
    data: [
            {
                type: 1,
                id:"id这个是",
                title: "title这个是",
                author: "author这个是",
                content: ["111wocao窝草我司财务经理，注会注税经济师等，比较节俭，所以不舍得刷歪国证，但英文很厉害，现在国内会计过度偏重核算，并没有太好的预算控制和成本管理。不光中国企业，在中国的小外企也模棱两可，把Accounting放的位置高而把FC放低，这是一种风气，毕竟当年一个国家领导人对这一行的期许竟然是不做假帐，一下就把层次拉低到核算了。某大型红色民企下属公司财务总监，大学同学舍友，CFA L3(原回答为CFA高级)，认为中国企业是没有真正的企业管理的，公司治理结构也是形同虚设，所以他们的活其实并不累，给相关方提供看得懂的东西就对了。其实国内也没有培养公司治理人才的环境，需要懂业务，跟信息化人才培养是一样的。请问有几家的预算不是用钱的汇报下，财务部门汇总下，然后撕逼一刀切？=======新增而且，管理会计这个说法本身就很中国，从源头上讲，预算与成本的思想源于工时定额制，泰勒在提出这个方法体系的时候， 就是在会计领域的会议上提出的，一直到上世纪60年代才开始被重视，刚开始哪能说是质疑，就是赤裸裸的嘲笑啊，因为当初根本看不到什么叫事前，认为核算后的数据比核算前记录的处理重要。而现在我们的层次就是帝国主义20世纪40年代的水平。","222我司财务经理，注会注税经济师等，比较节俭，所以不舍得刷歪国证，但英文很厉害，现在国内会计过度偏重核算，并没有太好的预算控制和成本管理。不光中国企业，在中国的小外企也模棱两可，把Accounting放的位置高而把FC放低，这是一种风气，毕竟当年一个国家领导人对这一行的期许竟然是不做假帐，一下就把层次拉低到核算了。某大型红色民企下属公司财务总监，大学同学舍友，CFA L3(原回答为CFA高级)，认为中国企业是没有真正的企业管理的，公司治理结构也是形同虚设，所以他们的活其实并不累，给相关方提供看得懂的东西就对了。其实国内也没有培养公司治理人才的环境，需要懂业务，跟信息化人才培养是一样的。请问有几家的预算不是用钱的汇报下，财务部门汇总下，然后撕逼一刀切？=======新增而且，管理会计这个说法本身就很中国，从源头上讲，预算与成本的思想源于工时定额制，泰勒在提出这个方法体系的时候， 就是在会计领域的会议上提出的，一直到上世纪60年代才开始被重视，刚开始哪能说是质疑，就是赤裸裸的嘲笑啊，因为当初根本看不到什么叫事前，认为核算后的数据比核算前记录的处理重要。而现在我们的层次就是帝国主义20世纪40年代的水平。","333我司财务经理，注会注税经济师等，比较节俭，所以不舍得刷歪国证，但英文很厉害，现在国内会计过度偏重核算，并没有太好的预算控制和成本管理。不光中国企业，在中国的小外企也模棱两可，把Accounting放的位置高而把FC放低，这是一种风气，毕竟当年一个国家领导人对这一行的期许竟然是不做假帐，一下就把层次拉低到核算了。某大型红色民企下属公司财务总监，大学同学舍友，CFA L3(原回答为CFA高级)，认为中国企业是没有真正的企业管理的，公司治理结构也是形同虚设，所以他们的活其实并不累，给相关方提供看得懂的东西就对了。其实国内也没有培养公司治理人才的环境，需要懂业务，跟信息化人才培养是一样的。请问有几家的预算不是用钱的汇报下，财务部门汇总下，然后撕逼一刀切？=======新增而且，管理会计这个说法本身就很中国，从源头上讲，预算与成本的思想源于工时定额制，泰勒在提出这个方法体系的时候， 就是在会计领域的会议上提出的，一直到上世纪60年代才开始被重视，刚开始哪能说是质疑，就是赤裸裸的嘲笑啊，因为当初根本看不到什么叫事前，认为核算后的数据比核算前记录的处理重要。而现在我们的层次就是帝国主义20世纪40年代的水平。",]

            },
            {
                type: 2,
                id:"id1",
                title: "title1",
                author: "author1",
                content: ["111现在的Linode可真是招黑啊，理由全是小水管支撑不了这么大的流量。实际根本不是这么回事，说白了就是其他主机商推广费用高，Linode推广费用低，还不能提现。所以大家各种忽悠大家买别的主机，而别用Linode的。那些黑Linode的真的有使用过吗？我在Linode和Vultr上都部署了主机，实际使用情况肯定是Linode好。网速非常稳定，服务器也稳定。Vultr的网络有时不稳定，会出现ssh卡得无法操作的情况。有一次Vultr升级还把我的VPS给重启了，给我发了一封通知邮件，可惜邮件我已经删了。下面截图为证，我在Linode和Vultr的使用情况。上图为Linode，下图为Vultr","222现在的Linode可真是招黑啊，理由全是小水管支撑不了这么大的流量。实际根本不是这么回事，说白了就是其他主机商推广费用高，Linode推广费用低，还不能提现。所以大家各种忽悠大家买别的主机，而别用Linode的。那些黑Linode的真的有使用过吗？我在Linode和Vultr上都部署了主机，实际使用情况肯定是Linode好。网速非常稳定，服务器也稳定。Vultr的网络有时不稳定，会出现ssh卡得无法操作的情况。有一次Vultr升级还把我的VPS给重启了，给我发了一封通知邮件，可惜邮件我已经删了。下面截图为证，我在Linode和Vultr的使用情况。上图为Linode，下图为Vultr","333现在的Linode可真是招黑啊，理由全是小水管支撑不了这么大的流量。实际根本不是这么回事，说白了就是其他主机商推广费用高，Linode推广费用低，还不能提现。所以大家各种忽悠大家买别的主机，而别用Linode的。那些黑Linode的真的有使用过吗？我在Linode和Vultr上都部署了主机，实际使用情况肯定是Linode好。网速非常稳定，服务器也稳定。Vultr的网络有时不稳定，会出现ssh卡得无法操作的情况。有一次Vultr升级还把我的VPS给重启了，给我发了一封通知邮件，可惜邮件我已经删了。下面截图为证，我在Linode和Vultr的使用情况。上图为Linode，下图为Vultr",]

            },
        ]
    ,
    msg: "",
    timestamp: 1477065600000


})
});


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
