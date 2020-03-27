const fs = require('fs');
const readline = require('readline');

function lines(filePath) {
    return callback => {
        let file = fs.createReadStream(filePath);
        let interface = readline.createInterface({
            input: file
        });

        interface.on('line', line => {
            let segments = line.split('/')
            callback.call(this, {
                'host': segments[0],
                'author': segments[1],
                'name': segments[2]
            })
        })
    }
}

exports.lines = lines