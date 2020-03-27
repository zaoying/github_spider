const lineReader = require('line-reader');

function readFile(filePath) {
    return callback => {
        lineReader.open(filePath, function(err, reader) {
            if (err) throw err;
            while (reader.hasNextLine()) {
                reader.nextLine(function(err, line) {
                    if (err) throw err;
                    let segments = line.split('/')
                    callback.call(this, {
                        'host': segments[0],
                        'author': segments[1],
                        'name': segments[2]
                    })
                })
            }
        })
    }
}

exports.readFile = readFile