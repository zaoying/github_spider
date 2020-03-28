const fileReader = require('./file_reader')
const repo = require('./repo')
const path = require('path');

let urls = path.resolve(__dirname, "../assets/urls.txt");

fileReader.lines(urls)
    .subscribe(repo.compose)
    .subscribe(repo.resolve)
    .subscribe(repo.transform)
    .subscribe(repo.output('../output/info.txt'))