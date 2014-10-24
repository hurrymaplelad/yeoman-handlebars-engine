handlebarsEngine = require '..'
yeoman = require 'yeoman-generator'
helpers = yeoman.test
assert = yeoman.assert

describe 'yeoman-handlebars-engine', ->

  describe 'detect()', ->
    describe 'given a handlebars template string', ->
      template = 'Beep {{ sound }}'
      it 'returns true', ->
        assert handlebarsEngine().detect(template)

    describe 'given a template with no substitutions', ->
      template = 'Beep boop'
      it 'returns false', ->
        assert not handlebarsEngine().detect(template)

    describe 'assigned as the engine of a generator', ->
      path = require 'path'
      class StubGenerator extends yeoman.generators.Base
        constructor: (args, options, config) ->
          super
          @sourceRoot path.join __dirname, 'fixtures'

        project: ->
          @description = 'Beep boop'
          @copy '_README.md', '__README.md'

      before (done) ->
        helpers.testDirectory path.join(__dirname, './output/'), (err) =>
          return done(err) if err

          helpers
            .createGenerator('stub', [[StubGenerator, 'stub']], [], {engine: handlebarsEngine()})
            .run {}, -> done()

      it 'evaluates substitutions in generated templates', ->
        assert.fileContent '__README.md', /Beep boop/
