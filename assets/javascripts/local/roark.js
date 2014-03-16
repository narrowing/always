var	jsonPath,
	thoughtField,
	tagField,
	submit,
	data,
	number,
	item,
	tagNumber = -1,
	localData = "kidData",
	localNumber = "kidNum";

$('body').ready(function(){
  $('body').addClass('input');
});

window.addEventListener("load", function(){
	setTimeout(function(){
		jsonPath = 'text/above.json';
		thoughtField = $('#i_thoughts')[0];
		tagField = $('#i_tags')[0];
		submit = $('#i_submit')[0];
		
		init(jsonPath);
	}, 500);
});   

//Check if in local storage, if so, retrieve and show it
var init = function(jsonPath){
	if(localStorage.getItem(localData)){
		data = localStorage.getItem(localData);
		data = JSON.parse(data);
		number = localStorage.getItem(localNumber);
		number = Number(number);

		item = data[number];
		fill();
		
	//If not, initialize a new storage
	}else{
		initializeNewData(jsonPath);
	}
};

//f: Request new data from a separate file
var initializeNewData = function(file){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var response = request.responseText;
			data = JSON.parse(response);
			localStorage.setItem(localData, JSON.stringify(data));
			localStorage.setItem(localNumber, JSON.stringify(number));
			init();
		}
	};     
	request.open("GET",file,true);
	request.send();
};


//
var tags = function(){
	var array = [],
		tagstring = tagField.value;
	while(tagstring.indexOf(",") > -1){
		var pos = tagstring.indexOf(",");
		var tag = tagstring.substring(0, pos-1);
		array.push(tag);
		tagstring = tagstring.substring(pos+1);
		tagstring = tagstring.trim();
	}
	return array;
};

//
var addEvents = function(){
	submit.addEventListener('submit', saveNextFill("next"), false);
};

//
var saveNextFill = function(next){
	save();
	next == "previous" ? number += -1 : number += 1;
	console.log(number);	
	if(number < 0) number = 0;
	localStorage.setItem(localNumber, JSON.stringify(number));
	item = data[number];
	fill();
};

//
$(window).keydown(function(event){
    var tagString = "",
        tagToLoad = number+tagNumber,
        active = document.activeElement,
        inTagField = false,
        t = 0;


	if (active && (active == tagField)) {//down and up should only work if you are in tagfield
		  inTagField = true;
	}

    if(event.which == 192){//left
		saveNextFill("previous");
		return false;
	}else if(event.which == 187){//right
		saveNextFill("next");
		return false;
	}else if(event.which == 38 && inTagField){//up
		for(t;t<data[tagToLoad].tags.length;t++){
			tagString += data[tagToLoad].tags[t];
		}
		tagNumber++;
		tagField.value = tagString;
	}else if(event.which == 40 && inTagField){//down

		for(t;t<data[tagToLoad].tags.length;t++){
			tagString += data[tagToLoad].tags[t];
		}
		tagNumber--;
		tagField.value = tagString;
	}
});

var fill = function(){
	thoughtField.value = item.thought;
	var tagString = "";
	for(var t=0;t<item.tags.length;t++){
		tagString += item.tags[t];
	}
	tagField.value = tagString;
};

var save = function(){
	item.thought = thoughtField.value;
	var tagArray = tags();
	item.tags = tagField.value;
	data[number] = item;
	localStorage.setItem(localData, JSON.stringify(data));	
};
