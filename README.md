yeoman-handlebars-engine
==============

[**Deprecated**](https://github.com/yeoman/generator/commit/566ab3307bb16cadd010fc6689708b68d56608e7#commitcomment-10404447)

Write Yeoman generator templates in Handlebars with Underscore.string helpers.

[![NPM version](https://badge.fury.io/js/yeoman-handlebars-engine.png)](http://badge.fury.io/js/yeoman-handlebars-engine) [![Build Status](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine.png)](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine)

Getting Started
-----

```sh
> npm install yeoman-handlebars-engine
```

Use it in your generator:
```coffee
handlebarsEngine = require 'yeoman-handlebars-engine'

class RobotGenerator extends yeoman.generators.Base
  engine: handlebarsEngine()
  constructor: (args, options, config) ->
    super
```

Configuration
-------------

Settings Handlebar delimiters (default to '{{' and '}}'):
```coffee
handlebarsEngine = require 'yeoman-handlebars-engine'
engine = handlebarsEngine('<%=', '%>')
```

Helpers
-------

Using Underscore.string helpers in your generator templates:
```coffee
@myClass = 'robot generator'
@bigNumber = 123456789.123
```

```html
My class: {{ classify myClass}}
Big number: {{ numberFormat bigNumber 5 "." ","}}
```

Outputs:
```html
My class: RobotGenerator
Big number: 123,456,789.12300
```


Changelog
---------

#### v1.0

Breaking change: Export a function that configures Handlebars and returns an engine, instead of exporting the engine directly.
