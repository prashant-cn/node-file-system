//fs.open(file, flag, [mode], callback) -> asynchronous
//fs.openSync(file, flag, [mode]) -> synchronous

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

fs.open(textFile, 'w+', (error, filedescriptor)=> {
    if(error){
        return console.log(`Error in reading file: ${error}`)
    }
    //perform any operation on file: read write append etc
    console.log(`File ${filedescriptor} opened succesfully.`);

    //close the file
    fs.close(filedescriptor, (error)=> {
        console.log(`File closed.`);
    })
})