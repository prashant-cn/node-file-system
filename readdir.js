//fs.readdir(path, {options}, callback) -async
//fs.readdirSync(path, {options}) -sync
const fs = require('fs')

//directory path
let directory = 'files'

//sync
let files = fs.readdirSync(directory)
console.log(files)

//async
fs.readdir(directory, (error, files)=> {
    if(error){
        throw error
    }
    console.log(files)
})