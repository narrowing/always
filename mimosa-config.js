exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "less",
    "handlebars"
  ],
  "server": {
    "path": "server.js",
    "views": {
      "compileWith": "handlebars",
      "extension": "hbs"
    }
  }
}