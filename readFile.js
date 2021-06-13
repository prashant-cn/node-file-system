//fs.readFile(file, {encoding, flag}, callback) -> asynchronous
//fs.readFileSync(file, {encoding, flag}) -> synchronous
const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

//sync
let data = fs.readFileSync(textFile, {encoding:'utf8'})
console.log(data) //use try-catch block if error handling needed in sync

//async
fs.readFile(textFile, {encoding: 'utf8'}, (error, data)=> {
    if(error){
        return console.log(error);
    }
    console.log(data)
})