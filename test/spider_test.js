const spider = require('../src/spider')

async function test(){
    let repo = await spider.getRepos("zaoying", "datacenter")
    console.log(repo)

    let release = await spider.getRelease("zaoying", "datacenter")
    console.log(release)
}

test()