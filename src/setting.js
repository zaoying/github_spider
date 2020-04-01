const GITHUB_API_SERVER = "api.github.com"
const REPOS = "/repos";
const RELEASE = "/releases";
const LANGUAGE = "/languages";

const REPO_KEYS = {
    '全称': 'full_name',
    '作者': 'owner.login', 
    '描述': 'description', 
    '创建时间': 'created_at', 
    '更新时间': 'updated_at', 
    '推送时间': 'pushed_at', 
    '语言': 'language',
    '版权声明': 'license.name'
}

const RELEASE_KEYS = {
        '名称': 'name',
        '标签': 'tag_name',
        '创建时间': 'created_at',
        '发布时间': 'published_at',
        'tar压缩包地址': 'tarball_url',
        'zip压缩包地址': 'zipball_url'
}

exports.GITHUB_API_SERVER = GITHUB_API_SERVER
exports.REPOS = REPOS
exports.RELEASE = RELEASE
exports.LANGUAGE = LANGUAGE
exports.REPO_KEYS = REPO_KEYS
exports.RELEASE_KEYS = RELEASE_KEYS