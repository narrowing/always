var	travel = 'text/above.txt',
	json = {
		"array":[]
	}


$('body').ready(function(){
  $('body').addClass('input');
});


$(window).keydown(function(event){
  if(event.which == 37){
    $('body').removeClass('input').addClass('output');
  }else if(event.which == 39){
    $('body').removeClass('output').addClass('input');
  }
});


var array = function(str,json){
	var thoughts = new Array();
	var num = 0;
	while(str.indexOf("\n") > -1){
		var pos = str.indexOf("\n");	
		var thoughtStructure = {
			"_id": num,
			"thought": str.substring(0, pos),
			"tags": [],
			"edited": Date(),
			"references": []
		}
		json.array.push(thoughtStructure);
		str = str.substring(pos+2);
		num += 1;
	}
	//var string;
	// for(var a=0; a<json.array.length;a++){
	// 	console.log(json.array[a]);
	// }
	console.log(JSON.stringify(json, null, 4));

};


var init = function(file){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	    if(request.readyState == 4 && request.status == 200){        
	        var text = request.responseText;
			array(text, json);
	    }
	};     
	request.open("GET",file,true);
	request.send();
}

init(travel, json);
