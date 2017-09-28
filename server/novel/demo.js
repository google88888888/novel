var fs=require('fs');  
  
fs.readFile('./第一篇.txt','utf-8',function(err,data){  
    if(err){  
        console.error(err);  
    }  
    else{  
        console.log(data); 
        var haha=data.split(/\r\n/g);	
		console.log("haha.length1111111111111111111111111111111111111111111111是"+haha.length);
		for(var i=0;i<haha.length;i++){
			console.log("haha"+i+"是"+haha[i]);
		}
  		
		
    }  
});