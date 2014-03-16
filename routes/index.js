var index = function(config) {
  cachebust = ''
  if (process.env.NODE_ENV !== "production") {
    cachebust = "?b=" + (new Date()).getTime()
  }

  var options = {
    reload:    config.liveReload.enabled,
    optimize:  config.isOptimize != null ? config.isOptimize : false,
    cachebust: cachebust
  };

  // In the event plain html pages are being used, need to
  // switch to different page for optimized view
  var name = "index";
  if (config.isOptimize && config.server.views.html) {
    name += "-optimize";
  }

  return function(req, res) {
    res.render(name, options);
  };
};

exports.index = index;

// exports.thoughtslist = function(db) {
//     return function(req, res) {
//         var collection = db.get('thoughts');
//         collection.find({},{},function(e,docs){
//             res.render('userlist', {
//                 "userlist" : docs
//             });
//         });
//     };
// };

// module.exports = {
//     index: function(req, res) {
//         res.render('index');
//     }
// };