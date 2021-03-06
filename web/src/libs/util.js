/**1
 * Created by mengjiuxiang on 2017/4/14.
 */
import $ from 'jquery';
import React from 'react';
import {Button,notification,message} from 'antd';
import moment from 'moment';
/*工具函数*/
export function RequestApi(type,url,data,callback,errorCallback){
    let t1 = new Date().getTime();
    $.ajax({
        type: type,
        url:  url,
        data: data,
        dataType: "json",
        success: function(data){
            let t2 = new Date().getTime();
            if(data.code===200){
                callback(data);
            }else{
                message.error("错误信息："+data.message);
                errorCallback && errorCallback(data);
            }
        },
        error:function(error){
            let t3 = new Date().getTime();
            message.error("网络连接异常:" + JSON.stringify(error.status) + ":" +JSON.stringify(error.statusText),5);
        }
    })
}

//type:0推荐，1经历，2立志，3情感，4哲思
export function typeNumToStr(num){
    if(num===1){
        return "经历";
    }else if(num===2){
        return "立志";
    }else if(num===3){
        return "情感";
    }else if(num===4){
        return "哲思";
    }
}
export function typeStrToNum(str){
    if(str==="经历"){
        return 1;
    }else if(str==="立志"){
        return 2;
    }else if(str==="情感"){
        return 3;
    }else if(str==="哲思"){
        return 4;
    }
}



    