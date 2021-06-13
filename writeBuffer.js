//fs.write(filedescriptor, buffer, offset, length, position, callback) -> asynchronous
//fs.writeSync(filedescriptor, buffer, offset, length, position) -> synchronous

const fs = require('fs')

//file path
const bufferData = "files/bufferData.txt"
let data = "Append this text"

const buffer = Buffer.from(data)


fs.open(bufferData, 'w', (error, filedescriptor)=> {
    if(error){
        return console.log(`Error in reading file: ${error}`)
    }
    //perform any operation on file: read write append etc
    console.log(`File ${filedescriptor} opened succesfully.`);

    //sync
    let bytes = fs.writeSync(filedescriptor, buffer, 0, buffer.byteLength, 0)
    console.log(`${bytes} bytes has been written.`)

    //async
    fs.write(filedescriptor, buffer, 0, buffer.byteLength, 0, (error, bytes)=> {
        if(error){
            throw error
        }
        console.log(`${bytes} bytes written from async.`)
    })
   

    //close the file
    fs.close(filedescriptor, (error)=> {
        console.log(`File closed.`);
    })
})