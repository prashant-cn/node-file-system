//fs.writeFile(file, options, callback) -> asynchronous
//fs.writeFileSync(file, options) -> synchronous
// options = {encoding, flag, mode}
const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

let data = "Append this text.\n"
const buffer = Buffer.from(`Data from buffer.`)

//sync //to get error in sync, use try-catch
fs.writeFileSync(textFile, data, {flag:'a'}) //this will return undefined, so no local variable

//async
fs.writeFile(textFile, buffer, {flag:'a'}, (error)=>{
    if(error){
        throw error
    }
    console.log(`File written Successfully.`)
})