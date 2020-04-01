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

function saveFile(path, filename) {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output)
    }

    let file = path + filename
    return content => {
        fs.writeFile(file, content, err => err && console.error)
    }
}

function appendFile(path, filename) {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output)
    }

    let file = path + filename
    return content => {
        fs.appendFile(file, content, err => err && console.error)
    }
}

exports.lines = lines
exports.appendFile = appendFile
exports.saveFile = saveFile