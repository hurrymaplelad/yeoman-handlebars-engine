var Handlebars = require('handlebars'),
	handlebarsDelimiters = require('handlebars-delimiters'),
    _ = require('underscore.string');

// register underscore.string helpers
Object.keys(_).forEach(function(helper) {
	var _sHelper = _[helper];
	if(Handlebars.Utils.isFunction(_sHelper))
		Handlebars.registerHelper(helper, function() {
			var args = Array.prototype.slice.call(arguments, 0).slice(0, -1);
			return _sHelper.apply(this, args);
		});
});

module.exports = function (beginDelimiter, endDelimiter) {
  var me = this;
  beginDelimiter = beginDelimiter || '{{';
  endDelimiter = endDelimiter || '}}';
  handlebarsDelimiters(Handlebars, [beginDelimiter, endDelimiter]);

  var engine = function (source, data) {
    if (!engine.detect(source)) return source;
    return Handlebars.compile(source)(data);
  };

  engine.detect = function(body) {
    return body && body.indexOf(beginDelimiter) > -1;
	};

  return engine;
};
