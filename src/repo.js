const setting = require('./setting')
const spider = require('./spider')

function compose(line) {
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
        let info = await spider.get(setting.GITHUB_API_SERVER, path)

        path = setting.REPOS + '/' + repo.author + '/' + repo.name + setting.RELEASE;
        let release = await spider.get(setting.GITHUB_API_SERVER, path)

        // path = setting.REPOS + '/' + repo.author + '/' + repo.name + setting.LANGUAGE;
        // let langauges = await spider.get(path)

        return {...info, release}
    }
    return null
}

function transform(repo) {
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
    return {
        next: values => {
            console.log(values.join('\t'))
        },
        error: console.error,
        complete: console.log
    }
}

exports.compose = compose
exports.resolve = resolve
exports.transform = transform
exports.output = output