var Handlebars = require('handlebars'),
    _ = require('underscore.string');

function engine(source, data) {
  return Handlebars.compile(source)(data);
}

engine.detect = function(body) {
  return body.indexOf('{{') > -1;
};

['camelize', 'dasherize', 'underscored'].forEach(function(helper) {
  Handlebars.registerHelper(helper, _[helper]);
});

module.exports = engine;
