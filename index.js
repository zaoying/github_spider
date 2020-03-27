const fileReader = require('./file_reader')
const spider = require('./spider')

let timeout = 0;
fileReader.readFile('./urls.txt')
    .call(this, repo => {
        if (repo.host === 'github.com') {
            spider.getRepos(repo.author, repo.name)
                .call(this, console.log)
            
            spider.getRelease(repo.author, repo.name)
                .call(console.log)
        }
    })