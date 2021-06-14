//fs.createReadStream(file, {options})
/*
    //options
    flags <string>
    encoding <string>
    fd <integer>
    mode <integer>
    autoClose <boolean>
    start <integer>
    end <integer>
    highWaterMark <integer> //chunk size | in bytes

    //defaults
    {
        flag: 'r',
        encoding: null,
        fd: null,
        mode: 0666,
        autoClose: true
    }
*/

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

let readStream = fs.createReadStream(textFile, {highWaterMark: 10, encoding: 'utf8'}) //readStream will be an event emmiter

readStream.on("data", (data)=> {
    //do whatever kind of operation you want on data
    console.log('data: ', data);

    //since readStream is event emitter, we can emit from here too for further processing
    readStream.emit('after', data)
})

readStream.on('after', (data)=> {
    console.log('After emitting.')
})

