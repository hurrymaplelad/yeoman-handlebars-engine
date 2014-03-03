yeoman-handlebars-engine [![NPM version](https://badge.fury.io/js/yeoman-handlebars-engine.png)](http://badge.fury.io/js/yeoman-handlebars-engine) [![Build Status](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine.png)](https://travis-ci.org/hurrymaplelad/yeoman-handlebars-engine)
==============

Write yeoman generator templates in handlebars.

```sh
> npm install yeoman-handlebars-engine
```

Use it in your generator:
```coffee
handlebarsEngine = require 'yeoman-handlebars-engine'

class RobotGenerator extends yeoman.generators.Base
  constructor: (args, options, config) ->
    options.engine = handlebarsEngine
    super
```
