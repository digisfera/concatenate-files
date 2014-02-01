var filerw = require('file-rw');

module.exports = function(inputFiles, outputFile, options, callback) {
  options = options || {};

  filerw.readFilesUtf8(inputFiles, function(err, filesData) {
    if(err) { return callback(err); }
    separator = options.separator || '';

    var res = null;
    try {
      res = filesData.join(separator);
    } catch(e) { return callback(e); }

    filerw.mkWriteFile(outputFile, res, callback);
  });

};
