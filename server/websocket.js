function websocket(conn){		
	  //模拟服务端接收文字
    conn.on("text", function (str) {
		 console.log("收到信息为："+str);
    });

    conn.on("close", function (code, reason) {
        console.log("服务端close，关闭code是"+code+"reason是"+reason)
    });
    conn.on("error", function (code, reason) {
        console.log("服务端error，错误code是"+code+"reason是"+reason)
    });

}


module.exports = websocket;
