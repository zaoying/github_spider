const fileUtils = require('./file-utils');
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
            let keys = element.split('.')
            let value = repo
            for(let key of keys) {
                value = value[key]
            }
            values.push(value)
        }
        for (const element of Object.values(setting.RELEASE_KEYS)) {
            let keys = element.split('.')
            let value = repo
            for(let key of keys) {
                value = value[key]
            }
            values.push(value)
        }
    }
    return values;
}

function output(path, filename) {
    let headers = [].concat(Object.keys(setting.RELEASE_KEYS), Object.keys(setting.REPO_KEYS));
    let firstRow = headers.join('\t') + '\n'
    fileUtils.saveFile(path, filename).call(this, firstRow)

    let appendFile = fileUtils.appendFile(path, filename)
    return values => {
        let eachRow = values.join('\t') + '\n'
        appendFile.call(this, eachRow)
    }
}

exports.compose = compose
exports.resolve = resolve
exports.transform = transform
exports.output = output