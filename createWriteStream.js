//fs.createWriteStream(file, {options})
/*
    //options
    flags <string>
    encoding <string>
    fd <integer>
    mode <integer>
    autoClose <boolean>
    start <integer>

    //defaults
    {
        flag: 'w',
        encoding: null,
        fd: null,
        mode: 0666,
        autoClose: true
        start: 0
    }
*/

const fs = require('fs')

//file path
const textFile = "files/textFile.txt"

const data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let writeStream = fs.createWriteStream('files/writeStream.txt')
writeStream.write(data, (error)=> {
    if(error){
        throw error
    }
    console.log('Data written successfully.')
})