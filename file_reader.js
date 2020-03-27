const lineReader = require('line-reader');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        lineReader.open(filePath, function(err, reader) {
            if (err) reject(err);
            while (reader.hasNextLine()) {
                reader.nextLine(function(err, line) {
                    if (err) reject(err);
                    let segments = line.split('/')
                    resolve({
                        'host': segments[0],
                        'author': segments[1],
                        'name': segments[2]
                    })
                })
            }
        })
    })
}

exports.readFile = readFile