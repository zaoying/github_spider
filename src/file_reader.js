const fs = require('fs')
const readline = require('readline')
const Subject = require('rxjs/Subject').Subject

function lines(filePath) {

    let file = fs.createReadStream(filePath);
    let interface = readline.createInterface({
        input: file
    });

    let observable = new Subject()
    interface.on('line', observable.next)

    return observable
}

exports.lines = lines