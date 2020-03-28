const fileReader = require('./file_reader')
const spider = require('./spider')
const path = require('path');

async function handler(author, name) {
    let keys = [], values = []

    let info = await spider.getRepos(author, name)
    keys.push(info.keys())
    values.push(info.values())

    let release = await spider.getRelease(author, name)
    keys.push(release.keys())
    values.push(release.values())

    console.log(keys.join('\t'))
    console.log(values.join('\t'))
}

let urls = path.resolve(__dirname, "../assets/urls.txt");
let timeout = 0;

fileReader.lines(urls).call(this, repo => {
    repo.host === 'github.com' && repo.name && setTimeout(handler, timeout, repo.author, repo.name)
    timeout += 1000
})