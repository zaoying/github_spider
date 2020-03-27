const fileReader = require('./file_reader')
const spider = require('./spider')

let timeout = 0;
fileReader.readFile('./urls.txt')
    .call(this, repo => {
        if (repo.host === 'github.com') {
            console.log("倒计时:" + timeout)
            setTimeout((author, name) => {
                console.info(author + ':' + name)
                // spider.getRepos(author, name)
                //     .call(this, console.log)
                
                // spider.getRelease(author, name)
                //     .call(console.log)
            }, timeout, repo.author, repo.name)
            timeout += 10;
        }
    })