const fileReader = require('../src/file_reader')

fileReader.lines("../assets/urls.txt")
    .call(this, console.log)