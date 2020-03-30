const fileReader = require('./file_reader')
const repo = require('./repo')
const path = require('path')
const map = require('rxjs/operators').map

let urls = path.resolve(__dirname, "../assets/urls.txt");

fileReader.lines(urls)
    .subscribe(async line => {
        let repository = repo.compose(line)
        let info = await repo.resolve(repository)
        let values = repo.transform(info)
        repo.output('../output/info.txt').call(this, values);
    })