window.onload=function(){
  var container,
      selector,
      site;
      document.getElementById("holder").innerHTML = "hello there";
      
  //var function with parameter of object : has to go on top of other two
  $('*[data-get="true"]').each(function(index){
    console.log($(this));
    container = $(this).attr('id');
    site = $(this).attr('data-href');
    selector = $(this).attr('data-selector');
    //call ajax function
    doAjax(site, container, selector);
    //return false; //this will stop the loop, only calling the first item
  });
 
  
  function doAjax(url, cont, elem){
    if(url.match('^http')){
      $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent(url)+
                "%22&format=xml'&callback=?",
        function(data){
          if(data.results[0]){
            var data = filterData(data.results[0]);
            //temporarily put data in placeholder obj so you can search it
            $('#holder').html(data);
            //if a selector element is passed, and the data has that element, then set that element as the data
            if(elem && $('#holder '+ elem)){
              data=$('#holder '+ elem);
              //data=data.find('.myclass');
            }
            $('#holder').html("empty");
            $('#'+cont).html(data);
            //console.log(data);
          } else {
            var errormsg = '<p>Error: could not load the page.</p>';
            container.html(errormsg);
            console.log("give error message");
          }
        }
      );
    } else {
      $('#'+cont).load(url + " " + elem);
    }
  }
  
  function filterData(data){
    data = data.replace(/<?\/body[^>]*>/g,'');
    data = data.replace(/[\r|\n]+/g,'');
    data = data.replace(/<--[\S\s]*?-->/g,'');
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
    data = data.replace(/<script.*\/>/,'');
    return data;
  }
  
  
  
}
