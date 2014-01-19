var fileFun = require('file-fun');

exports.sync = function(contents, separator) {
  separator = separator || '';
  return contents.join(separator);
}
exports.globsToFile = fileFun.sync_globsToFile(exports.sync)
exports.filesToFile = fileFun.sync_filesToFile(exports.sync)
exports.async = fileFun.sync_async(exports.sync)