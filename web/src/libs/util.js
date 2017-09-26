/**
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

//type:0推荐，1军事，2历史，3情感，4幽默
export function typeNumToStr(num){
    if(num===1){
        return "军事";
    }else if(num===2){
        return "历史";
    }else if(num===3){
        return "情感";
    }else if(num===4){
        return "幽默";
    }
}



    