const fileReader = require('./file_reader')
const spider = require('./spider')
const path = require('path');

async function handler(author, name) {
    let keys = []

    let info = await spider.getRepos(author, name)
    keys.push(info.keys)

    let release = await spider.getRelease(author, name)
    keys.push(release.keys)

    console.log(keys.join('\t'))
}

let urls = path.resolve(__dirname, "../assets/urls.txt");
let timeout = 0;

fileReader.lines(urls).call(this, repo => {
    repo.host === 'github.com' && repo.name && setTimeout(handler, timeout, repo.author, repo.name)
    timeout += 1000
})