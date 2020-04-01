# GitHub Spider

## 一个基于NodeJS原生API的爬虫工具

> 使用 `GitHUb` 官方 `API` 接口，爬取指定作者的 `Repository`， 返回 `JSON` 格式的结果，支持提取自定义字段信息，例如 `License` 和 `Release` 

### Github API v3 接口介绍

本项目基于 `v3` 版[Github API](https://developer.github.com/v3/)编写。

API接口的 `根地址` 是 `https://api.github.com`， `API` 资源格式如下：

```sh
# 获取特定repository
curl https://api.github.com/{author}/{repo}

# 获取特定repository的releases
curl https://api.github.com/{author}/{repo}/releases

# 获取特定repository的language
curl https://api.github.com/{author}/{repo}/languages
```

示例

```sh
# 可以复制链接到浏览器打开，查看结果
curl https://api.github.com/BurntSushi/toml

# 可以复制链接到浏览器打开，查看结果
curl https://api.github.com/BurntSushi/toml/releases

# 可以复制链接到浏览器打开，查看结果
curl https://api.github.com/BurntSushi/toml/languages
```

## 使用步骤

### `clone` 项目到本地

```sh
git clone https://github.com/zaoying/github_spider.git
```

### 编辑 `assets/urls.txt` 

按照 `{host}/{author}/{repo}` 的格式，每行只写一个项目地址

```txt
github.com/coreos/go-oidc
github.com/cyphar/filepath-securejoin
github.com/daviddengcn/go-colortext
```

目前 `host` 只支持 `github.com`

### [可选]编辑 `src/setting.js`

```js
// 修改这里，就在最终结果输出自定义字段
const REPO_KEYS = [
    {key: '全称', value: 'full_name'},
    {key: '作者', value: 'owner.login'}, 
    {key: '描述', value: 'description'}, 
    {key: '创建时间', value: 'created_at'}, 
    {key: '更新时间', value: 'updated_at'}, 
    {key: '推送时间', value: 'pushed_at'}, 
    {key: '语言', value: 'language'},
    {key: '版权声明', value: 'license.name'}
]
// 修改这里，就在最终结果输出自定义字段
const RELEASE_KEYS = [
        {key: '名称', value: 'name'},
        {key: '标签', value: 'tag_name'},
        {key: '创建时间', value: 'created_at'},
        {key: '发布时间', value: 'published_at'},
        {key: 'tar压缩包地址', value: 'tarball_url'},
        {key: 'zip压缩包地址', value: 'zipball_url'}
]
```

### 运行结果

1. 运行之前需要先安装 `NodeJS` 环境
2. 然后在项目根目录安装依赖
```sh
npm install
```
3. 然后运行命令
```sh
node src/index.js
```
4. 命令运行后，结果保存在 `output` 目录下
5. 用文本编辑器打开 `result.txt`，再把内容复制粘贴到新建 `空白` Excel表格
6. 最后运用国人最擅长的 `Excel` 技巧，把结果嵌入文档

### 最后

如果遇到公司内网无法链接外网的情况，因为 `NodeJS` 本身没有支持 `http_proxy` 的模块。建议在 `Github` 官网直接 `fork` 本项目，然后再 `clone` 代码到本地，修改完再直接 `Push` 到 `Github`，因为本项目支持 [Github Actions](https://github.com/zaoying/github_spider/actions) 自动构建，在提交代码后会自动运行爬虫脚本，并把结果 `result.txt` 上传到 `Github`，点击就可以[下载](https://github.com/zaoying/github_spider/suites/563180603/artifacts/3694736)。