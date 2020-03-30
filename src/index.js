const fileReader = require('./file_reader')
const repo = require('./repo')
const path = require('path')
const map = require('rxjs/operators').map

let urls = path.resolve(__dirname, "../assets/urls.txt");

fileReader.lines(urls)
    .pipe(
        map(repo.compose),
        map(repo.resolve),
        map(repo.transform)
        )
    .subscribe(repo.output('../output/info.txt'))