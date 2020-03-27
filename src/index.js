const fileReader = require('./file_reader')
const spider = require('./spider')

let timeout = 0;

fileReader.lines('../assets/urls.txt')
    .call(this, repo => {
        if (repo.host === 'github.com' && repo.name) {
            setTimeout((author, name) => {
                spider.getRepos(author, name).then(console.log)
                spider.getRelease(author, name).then(console.log)
            }, timeout, repo.author, repo.name)
        }
        timeout += 1000;
    })