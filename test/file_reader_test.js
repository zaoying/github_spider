const fileReader = require('../src/file_reader')
const path = require('path');

let urls = path.resolve(__dirname, "../assets/urls.txt");
fileReader.lines(urls)
    .call(this, console.log)