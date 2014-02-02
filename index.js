var filerw = require('file-rw'),
    _ = require('lodash');

module.exports = function(inputFiles, outputFile, options, callback) {
  if(!callback && _.isFunction(options)) {
    callback = options;
    options = null;
  }

  options = options || {};
  callback = callback || function() {};

  filerw.readFilesUtf8(inputFiles, function(err, filesData) {
    if(err) { return callback(err); }
    separator = options.separator || '';

    var res = null;
    try {
      res = filesData.join(separator);
    } catch(e) { return callback(e); }

    filerw.mkWriteFile(outputFile, res, function(err, success) {
      if(err) { callback(err); }
      else { callback(null, { outputFile: outputFile, outputData: res }); }
    });
  });

};
