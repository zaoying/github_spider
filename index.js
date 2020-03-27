const fileReader = require('./file_reader')
const spider = require('./spider')

fileReader.readFile('./urls.txt')
    .then(repo => {
        if (repo.host === 'github.com' && repo.name) {
            spider.getRepos(repo.author, repo.name)
                .then(console.log)
            
            spider.getRelease(repo.author, repo.name)
                .then(console.log)
        }
    })