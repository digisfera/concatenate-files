var expect = require('chai').expect,
    fs = require('fs'),
    rimraf = require('rimraf'),
    concatFun = require('../index');

describe('concat-file-fun', function() {

  before(function() {
    rimraf.sync( __dirname + "/tmp");
  });

  readFileUtf8 = function(f) { return fs.readFileSync(f, { encoding: 'utf8'})};
  
  it('should concatenate files', function(done) {
    var inFile1 = __dirname + "/files/f1.txt",
        inFile2 = __dirname + "/files/f2.txt",
        outFile = __dirname + "/tmp/concat01.txt";
    concatFun([inFile1, inFile2], outFile, { separator: '.' }, function(err, result) {
      expect(err).to.be.not.ok;
      expect(result).to.eql({ outputData: 'foo.bar', outputFile: outFile });
      expect(readFileUtf8(outFile)).to.equal('foo.bar');
      done();
    });
  });  
  it('callback error if one of the files does not exist', function(done) {
    var inFile1 = __dirname + "/files/f1.txt",
        inFileInvalid = 'unexisting file',
        inFile2 = __dirname + "/files/f2.txt",
        outFile = __dirname + "/tmp/concat02.txt";
    concatFun([inFile1, inFileInvalid, inFile2], outFile, { separator: '.' }, function(err, result) {
      expect(err).to.be.ok;
      expect(result).to.be.not.ok;
      expect(readFileUtf8.bind(null, outFile)).to.throw();
      done();
    });
  });
    
});