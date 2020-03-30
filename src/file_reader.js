const fs = require('fs')
const readline = require('readline')
const Observable = require('rxjs').Observable

function lines(filePath) {
    return new Observable(oberserver => {
        let file = fs.createReadStream(filePath);
        let interface = readline.createInterface({input: file});
        interface.on('line', line => oberserver.next(line))
        interface.on('error', err => oberserver.error(err))
        interface.on('close', () => oberserver.complete())
    })
}

exports.lines = lines