const setting = require('./setting')

async function compose(line) {
    let segments = line.split('/')
    return {
        'host': segments[0],
        'author': segments[1],
        'name': segments[2]
    }
}

async function resolve(repo) {
    if (repo.host === 'github.com' && repo.name) {

        let path = setting.REPOS + '/' + repo.author + '/' + repo.name
        let info = await spider.get(path)

        path = setting.REPOS + '/' + repo.author + '/' + repo.name + setting.RELEASE;
        let release = await spider.get(path)

        // path = setting.REPOS + '/' + repo.author + '/' + repo.name + setting.LANGUAGE;
        // let langauges = await spider.get(path)

        return {...info, release}
    }
    return null
}

async function transform(repo) {
    let values = []
    if (repo) {
        for (const element of Object.values(setting.REPO_KEYS)) {
            values.push(repo[element])
        }
        for (const element of Object.values(setting.RELEASE_KEYS)) {
            values.push(repo[element])
        }
    }
    return values;
}

function output(filename) {
    return values => {
        console.log(values.join('\t'))
    }
}

exports.compose = compose
exports.resolve = resolve
exports.transform = transform
exports.output = output