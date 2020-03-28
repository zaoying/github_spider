const GITHUB_API_SERVER = "api.github.com"
const REPOS = "/repos";
const RELEASE = "/releases";
const LANGUAGE = "/languages";

const REPO_KEYS = {
    'full_name': 'full_name',
    'owner': 'owner', 
    'description': 'description', 
    'created_at': 'created_at', 
    'updated_at': 'updated_at', 
    'pushed_at': 'pushed_at', 
    'language': 'language',
    'license': 'license.name'
}

const RELEASE_KEYS = {
        name: 'name',
        tag_name: 'tag_name',
        created_at: 'created_at',
        published_at: 'published_at',
        tarball_url: 'tarball_url',
        zipball_url: 'zipball_url'
}

exports.GITHUB_API_SERVER = GITHUB_API_SERVER
exports.REPOS = REPOS
exports.RELEASE = RELEASE
exports.LANGUAGE = LANGUAGE
exports.REPO_KEYS = REPO_KEYS
exports.RELEASE_KEYS = RELEASE_KEYS