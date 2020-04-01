const fileUitls = require('./file-utils')
const repo = require('./repo')
const path = require('path')

let urls = path.resolve(__dirname, "../assets/urls.txt");
let output = path.resolve(__dirname, "../output/");
let saveFile = repo.output(output, "result.txt");

fileUitls.lines(urls)
    .subscribe(async line => {
        let repository = repo.compose(line)
        let info = await repo.resolve(repository)
        let values = repo.transform(info)
        saveFile.call(this, values)
    })