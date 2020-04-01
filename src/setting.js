const GITHUB_API_SERVER = "api.github.com"
const REPOS = "/repos";
const RELEASE = "/releases";
const LANGUAGE = "/languages";

const REPO_KEYS = [
    {key: '全称', value: 'full_name'},
    {key: '作者', value: 'owner.login'}, 
    {key: '描述', value: 'description'}, 
    {key: '创建时间', value: 'created_at'}, 
    {key: '更新时间', value: 'updated_at'}, 
    {key: '推送时间', value: 'pushed_at'}, 
    {key: '语言', value: 'language'},
    {key: '版权声明', value: 'license.name}'
]

const RELEASE_KEYS = [
        {key: '名称', value: 'name'},
        {key: '标签', value: 'tag_name'},
        {key: '创建时间', value: 'created_at'},
        {key: '发布时间', value: 'published_at'},
        {key: 'tar压缩包地址', value: 'tarball_url'},
        {key: 'zip压缩包地址', value: 'zipball_url'}
]

exports.GITHUB_API_SERVER = GITHUB_API_SERVER
exports.REPOS = REPOS
exports.RELEASE = RELEASE
exports.LANGUAGE = LANGUAGE
exports.REPO_KEYS = REPO_KEYS
exports.RELEASE_KEYS = RELEASE_KEYS