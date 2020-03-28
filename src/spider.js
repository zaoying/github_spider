const https = require('https');

function get(host, path) {
    let options = {
        hostname: host,
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

exports.get = get