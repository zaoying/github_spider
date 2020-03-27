const fileReader = require('./file_reader')
const spider = require('./spider')
const path = require('path');

let urls = path.resolve(__dirname, "../assets/urls.txt");
let timeout = 0;

fileReader.lines(urls)
    .call(this, repo => {
        if (repo.host === 'github.com' && repo.name) {
            setTimeout((author, name) => {
                spider.getRepos(author, name).then(console.log)
                spider.getRelease(author, name).then(console.log)
            }, timeout, repo.author, repo.name)
        }
        timeout += 1000;
    })