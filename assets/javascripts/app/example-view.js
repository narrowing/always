define(['jquery', 'templates'], function($, templates) {
  var ExampleView = (function() {

    var randNum = function(array){
      return Math.floor((Math.random()*array.length)+0);
    }

    var vidArray = ["mountain","animals","train","truck","tuktuk","fire","aki","band","barber","bark","barn","bubbles","capped","dance","escalator","fish","flags","fruits","ganges","hollow","howl","kashmir","lantern","meal","mixedLeaves","mori","osaka","peek","redGround","redTrees","restaurant","river","shack","shackClose","sky","spikey","suits","tea","window","yellowLeaves"], 
        fetchArray = [["sf.funcheap", ".upcoming-calendar"]],
        quoteArray = ["People want to create. If the thing fits them perfectly, would they still want to create? Do they want the perfectly tailored end result? The enjoyment of building or the satisfaction that they built it (the pride)?","You cannot kill a man's self resepect. You can only kill his pretense at it. Unless you bring him to believe he is not what he thought he was."];
        
    var vidSrc = "video/" + vidArray[randNum(vidArray)] + ".mp4"
        fetchHref = "http://" + fetchArray[randNum(fetchArray)][0] + ".com",
        fetchSelector = fetchArray[randNum(fetchArray)][1];
    var quoteText = quoteArray[randNum(quoteArray)];

    var info_video = {
      video:{
        id: "",
        tags: "",
        src: vidSrc,
        settings:{
          preload: "auto",
          autoplay: "true",
          muted: "muted",
          volume: "0",
          type: "video/mp4"
        }
      }
    };
    
    var info_fetch = {
      fetch:{
        id: "",
        href: fetchHref,
        get: "true",
        selector: fetchSelector,
      }
    };

    var info_quote = {
      quote:{
        id: "",
        text: quoteText,
        tags: ""
      }
    };

    function ExampleView() {}

    ExampleView.prototype.render = function(element) {
      //$(element).append(templates['facebook']());
      //$(element).append(templates['video'](info_video.video));
      //$(element).append(templates['fetch'](info_fetch.fetch));
      $(element).append(templates['input']());                  
      $(element).append(templates['output'](info_quote.quote));                        
    };

    return ExampleView;

  })();
  return ExampleView;
});
