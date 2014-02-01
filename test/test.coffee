expect = require('chai').expect
concatFun = require('../index')

describe 'concat-file-fun', ->
  
  it 'should concatenate files', (done) ->
    concatFun.files ["#{__dirname}/files/f1.txt", "#{__dirname}/files/f2.txt"], "#{__dirname}/tmp/concat01.txt", { separator: '.' }, (err, result) ->
      console.log(err, result)
      done()
    