# concatenate-files

Concatenate files

## Installation

    npm install concatenate-files

## Usage

### concat(inputFiles, outputFile, [options], [callback])

* `inputFiles` - array of files to concatenate
* `outputFile` - file to write with result
* `options` - options object
  * `separator` - separator to insert between file content
* `callback` - function that will be called with `(err, { outputFile, outputData })`


## Example

    var concat = require('concatenate-files');

    concat(['f1.js', 'f2.js'], 'out.js', { separator: ';' }, function(err, result) {
      // result == { outputFile: 'out.js', outputData: '...' }
    });

## TODO

Support source maps. Extract logic from [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap)?