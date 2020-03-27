const https = require('https');

const GITHUB_API_SERVER = "api.github.com"
const REPOS = "/repos";
const RELEASE = "/releases";
const LANGUAGE = "/languages";

function get(path) {
    console.log(path)
    let options = {
        hostname: GITHUB_API_SERVER,
        port: 443,
        path: path,
        headers: {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'},
        method: 'GET'
    };
    return new Promise((resolve, reject) => {
        https.get(options, resp => {
            let json = ''
            resp.on('data', data => json += data)
            resp.on('end', () => {
                    try {
                        let data = JSON.parse(json)
                        resolve(data)
                    }
                    catch (e) {
                        reject(e)
                    }
            })
        }).on('error', reject)
    })
}

async function getRepos(author, repoName) {
    let path = REPOS + '/' + author + '/' + repoName

    let repo = await get(path)

    let full_name = repo.full_name
    let owner = repo.owner.login
    let description = repo.description
    let created_at = repo.created_at
    let updated_at = repo.updated_at
    let pushed_at = repo.pushed_at
    let language = repo.language
    let license = repo.license.name
    return {
        full_name: full_name,
        owner: owner,
        description: description,
        created_at: created_at,
        updated_at: updated_at,
        pushed_at: pushed_at,
        language: language,
        license: license
    }
}

async function getRelease(author, repo) {
    let path = REPOS + '/' + author + '/' + repo + RELEASE;
    let releases = await get(path)

    if (releases && releases.length) {
        let latest = releases[0]
        let name = latest.name
        let tag_name = latest.tag_name
        let created_at = latest.created_at
        let published_at = latest.published_at
        let tarball_url = latest.tarball_url
        let zipball_url = latest.zipball_url

        return {
            name: name,
            tag_name: tag_name,
            created_at: created_at,
            published_at: published_at,
            tarball_url: tarball_url,
            zipball_url: zipball_url
        }
    }
    return releases;
}

async function getLanguage(author, repo) {
    let path = REPOS + '/' + author + '/' + repo + LANGUAGE;
    return await get(path)
}

exports.getRelease = getRelease
exports.getRepos = getRepos
exports.getLanguage = getLanguage