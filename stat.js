//fs.stat(file/path, callback) -> asynchronous
//fs.statSync(file/path) -> synchronous

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

//synchronous
let stats = fs.statSync(textFile)
console.log(stats)
//we have multiple "is" option with stats too
console.log(stats.isDirectory()) //false
console.log(stats.isFile()) //true
console.log('synchronous')


//asynchronous

fs.stat(textFile, (error, stats)=> {
    if(error){
        throw error
    }
    console.log(stats)
})
console.log('asynchronous')