# concat-file

Concatenate files

## Installation

    npm install concat-file

## Usage

### concat(inputFiles, outputFile, [options], [callback])

* `inputFiles` - array of files to concatenate
* `outputFile` - file to write with result
* `options` - options object
  * `separator` - separator to insert between file content
* `callback` - function that will be called with `(err, result)`


## Example

    var concat = require('concat-file');

    concat(['f1.js', 'f2.js'], 'out.js', { separator: ';' }, function(err, concatted) { });

# TODO

Support source maps. Extract logic from [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap)?