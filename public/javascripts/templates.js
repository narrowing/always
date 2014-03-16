define(['vendor/handlebars','app/template/handlebars-helpers'], function (Handlebars){
  if (!Handlebars) {
  console.log("Handlebars library has not been passed in successfully");
  return;
}

var template = Handlebars.template, templates = {};
Handlebars.partials = templates;

//
// Source file: [/Users/scottbergman/Sites/other/remember/assets/javascripts/app/template/facebook.hbs]
// Template name: [facebook]
//
templates['facebook'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"fb-root\"></div>\n<script>\n  window.fbAsyncInit = function() {\n  FB.init({\n    appId      : '486839524760505',\n    status     : true, // check login status\n    cookie     : true, // enable cookies to allow the server to access the session\n    xfbml      : true  // parse XFBML\n  });\n\n  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired\n  // for any authentication related change, such as login, logout or session refresh. This means that\n  // whenever someone who was previously logged out tries to log in again, the correct case below \n  // will be handled. \n  FB.Event.subscribe('auth.authResponseChange', function(response) {\n    // Here we specify what we do with the response anytime this event occurs. \n    if (response.status === 'connected') {\n      // The response object is returned with a status field that lets the app know the current\n      // login status of the person. In this case, we're handling the situation where they \n      // have logged in to the app.\n      testAPI();\n    } else if (response.status === 'not_authorized') {\n      // In this case, the person is logged into Facebook, but not into the app, so we call\n      // FB.login() to prompt them to do so. \n      // In real-life usage, you wouldn't want to immediately prompt someone to login \n      // like this, for two reasons:\n      // (1) JavaScript created popup windows are blocked by most browsers unless they \n      // result from direct interaction from people using the app (such as a mouse click)\n      // (2) it is a bad experience to be continually prompted to login upon page load.\n      FB.login();\n    } else {\n      // In this case, the person is not logged into Facebook, so we call the login() \n      // function to prompt them to do so. Note that at this stage there is no indication\n      // of whether they are logged into the app. If they aren't then they'll see the Login\n      // dialog right after they log in to Facebook. \n      // The same caveats as above apply to the FB.login() call here.\n      FB.login();\n    }\n  });\n  };\n\n  // Load the SDK asynchronously\n  (function(d){\n   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];\n   if (d.getElementById(id)) {return;}\n   js = d.createElement('script'); js.id = id; js.async = true;\n   js.src = \"//connect.facebook.net/en_US/all.js\";\n   ref.parentNode.insertBefore(js, ref);\n  }(document));\n\n  // Here we run a very simple test of the Graph API after login is successful. \n  // This testAPI() function is only called in those cases. \n  function testAPI() {\n    console.log('Welcome!  Fetching your information.... ');\n    FB.api('/me', function(response) {\n      console.log('Good to see you, ' + response.name + '.');\n    });\n  }\n</script>\n\n<!--\n  Below we include the Login Button social plugin. This button uses the JavaScript SDK to\n  present a graphical Login button that triggers the FB.login() function when clicked. -->\n\n<fb:login-button show-faces=\"true\" width=\"200\" max-rows=\"1\"></fb:login-button>\n";
  })

//
// Source file: [/Users/scottbergman/Sites/other/remember/assets/javascripts/app/template/fetch.hbs]
// Template name: [fetch]
//
templates['fetch'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"c_content\" class=\"container\">\n  <div id=\"holder\" class=\"none\" width=\"0\" height=\"0\"></div>\n  <div class=\"helper\">\n      <div id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-href=\"";
  if (helper = helpers.href) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.href); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-get=\"";
  if (helper = helpers.get) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.get); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"fetch\" data-selector=\"";
  if (helper = helpers.selector) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selector); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"center content\">\n      </div>\n  </div>\n</div>";
  return buffer;
  })

//
// Source file: [/Users/scottbergman/Sites/other/remember/assets/javascripts/app/template/input.hbs]
// Template name: [input]
//
templates['input'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"c_input\" class=\"container\">\n  <div class=\"helper\">\n    <form id=\"f_input\">\n      <textarea id=\"i_thoughts\" rows=\"1\" cols=\"10\" class=\"in_thoughts\"></textarea>\n      <input id=\"i_tags\" type=\"text\" class=\"in_tags f_l\">      \n      <input id=\"i_submit\" type=\"submit\" onsubmit=\"save()\" class=\"in_submit f_r\">            \n    </form>\n  </div>\n</div>";
  })

//
// Source file: [/Users/scottbergman/Sites/other/remember/assets/javascripts/app/template/output.hbs]
// Template name: [output]
//
templates['output'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"c_skrim\" class=\"container full\"></div>\n\n<div id=\"c_output\" class=\"container\">\n  <div class=\"helper\">\n    <div id=\"t_ouput\" class=\"t_ital center\">\n      <div id=\"c_outputInner\" class=\"container\">\n        <div class=\"helper\">\n          ";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n      </div>\n    </div\n  </div>\n</div>";
  return buffer;
  })

//
// Source file: [/Users/scottbergman/Sites/other/remember/assets/javascripts/app/template/video.hbs]
// Template name: [video]
//
templates['video'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<video id='v_back' class='' value='true' preload='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.preload)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' autoplay='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.autoplay)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' muted='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.muted)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' volume='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.volume)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n      <source id='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' src='";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' type='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n</video>";
  return buffer;
  })
return templates; });