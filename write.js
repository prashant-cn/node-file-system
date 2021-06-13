//fs.write(filedescriptor, string, {position, encoding}, callback) -> asynchronous
//fs.writeSync(filedescriptor, string, {position, encoding}) -> synchronous

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"
let string = "Append this text"

fs.open(textFile, 'a', (error, filedescriptor)=> {
    if(error){
        return console.log(`Error in reading file: ${error}`)
    }
    //perform any operation on file: read write append etc
    console.log(`File ${filedescriptor} opened succesfully.`);

    //sync
    let bytes = fs.writeSync(filedescriptor, string)
    console.log(`${bytes} bytes written in file.`);

    //async
    fs.write(filedescriptor, `${string} from async\n`, (error, bytes)=> {
        if(error){
            return console.log(error)
        }
        console.log(`${bytes} bytes written in file from async.`)
    })


    //close the file
    fs.close(filedescriptor, (error)=> {
        console.log(`File closed.`);
    })
})