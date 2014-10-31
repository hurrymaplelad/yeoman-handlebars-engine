var Handlebars = require('handlebars'),
  handlebarsDelimiters = require('handlebars-delimiters'),
  fs = require('fs');

module.exports = function(options) {
  this.engine = function (source, data) {
    return Handlebars.compile(source)(data);
  };

  this.engine.detect = function (body) {
    return body.indexOf('{{') > -1;
  };

  // register underscore.string helpers
  options.fns = options.fns || require('underscore.string');

  var registerHelpers = function (fns) {
    Object.keys(fns)
      .filter(function (fnName) {
        return Handlebars.Utils.isFunction(fns[fnName]);
      })
      .forEach(function (fnName) {
        Handlebars.registerHelper(fnName, function () {
          var args = Array.prototype.slice.call(arguments, 0).slice(0, -1);
          return fns[fnName].apply(this, args);
        });
      });
  };

  var registerPartials = function (partialsPath) {
    fs.readdirSync(partialsPath).forEach(function (p) {
      var template = fs.readFileSync(partialsPath + p, 'utf-8');
      console.log(partialsPath + p);
      Handlebars.registerPartial(p, template);
    });
  };

  if(options && options.fns) registerHelpers(options.fns);
  if(options && options.partials) registerPartials(options.partials);
  return this.engine;
};
