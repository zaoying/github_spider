const fileReader = require('./file_reader')
const spider = require('./spider')
const path = require('path');

async function handler(author, name) {
    let keys = [], values = []

    let info = await spider.getRepos(author, name)
    keys.push(Object.keys(info))
    values.push(Object.values(info))

    let release = await spider.getRelease(author, name)
    keys.push(Object.keys(release))
    values.push(Object.values(release))

    console.log(keys.join('\t'))
    console.log(values.join('\t'))
}

let urls = path.resolve(__dirname, "../assets/urls.txt");
let timeout = 0;

fileReader.lines(urls).call(this, repo => {
    repo.host === 'github.com' && repo.name && setTimeout(handler, timeout, repo.author, repo.name)
    timeout += 1000
})