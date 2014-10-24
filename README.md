yeoman-handlebars-engine [![NPM version](https://badge.fury.io/js/yeoman-handlebars-engine.png)](http://badge.fury.io/js/yeoman-handlebars-engine) [![Build Status](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine.png)](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine)
==============

Write Yeoman generator templates in Handlebars with Underscore.string helpers.

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

Settings Handlebar delimiters (default to '{{' and '}}'):
```coffee
handlebarsEngine = require 'yeoman-handlebars-engine'
theEngine = handlebarsEngine('<%=', '%>')
```

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
