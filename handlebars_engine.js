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

var engine = module.exports = function (beginDelimiter, endDelimiter) {
  var me = this;

  this.setDelimiter = function(beginDelimiter, endDelimiter) {
    me._beginDelimiter = beginDelimiter || '{{';
    me._endDelimiter = endDelimiter || '}}';
    handlebarsDelimiters(Handlebars, [me._beginDelimiter, me._endDelimiter]);
    return me.engine;
  };

  this.engine = function (source, data) {
    return Handlebars.compile(source)(data);
  };

  this.engine.detect = function(body) {
    return body.indexOf(me._beginDelimiter) > -1;
	};

  return this.setDelimiter(beginDelimiter, endDelimiter);
};
