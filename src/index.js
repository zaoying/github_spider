const fileReader = require('./file_reader')
const repo = require('./repo')
const path = require('path')

let urls = path.resolve(__dirname, "../assets/urls.txt");
let output = path.resolve(__dirname, "../assets/urls.txt");
let saveFile = repo.output(output);

fileReader.lines(urls)
    .subscribe(async line => {
        let repository = repo.compose(line)
        let info = await repo.resolve(repository)
        let values = repo.transform(info)
        saveFile.call(this, values)
    })