//fs.read(filedescriptor, buffer, offset, length, position, callback) -> asynchronous
//fs.readSync(filedescriptor, buffer, offset, length, position) -> synchronous

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

let fileSize = fs.statSync(textFile).size
let buffer = new Buffer.alloc(fileSize)
console.log(fileSize)

fs.open(textFile, 'r+', (error, filedescriptor)=> {
    if(error){
        return console.log(`Error in reading file: ${error}`)
    }
    //perform any operation on file: read write append etc
    console.log(`File ${filedescriptor} opened succesfully.`);
    //read synchronously
    let data = fs.readSync(filedescriptor, buffer, 0, fileSize, 0)
    console.log(data) //just the file bytes size
    console.log(buffer.toString()) //actual file data

    //read asynchronously
    fs.read(filedescriptor, buffer, 0, fileSize, 0, (error, data)=> {
        if(error){
            throw error
        }
        console.log(data) //just the file bytes size
        console.log(buffer.toString()) //actual file data
    })


    //close the file
    fs.close(filedescriptor, (error)=> {
        console.log(`File closed.`);
    })
})