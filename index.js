var fileFun = require('file-fun');

module.exports = function(inputFiles, outputFile, options, callback) {
  options = options || {};

  fileFun.readFilesUtf8(inputFiles, function(err, filesData) {
    separator = options.separator || '';

    var res = null;
    try {
      res = filesData.join(separator);
    } catch(e) { return callback(e); }

    fileFun.mkWriteFile(outputFile, res, callback);
  });

};
