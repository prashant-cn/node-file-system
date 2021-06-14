//fs.mkdir(path, mode, callback) - async
//fs.mkdirSync(path, mode) - sync
const fs = require('fs')

const dirNames = {
    sync: 'createdSyncDirectory',
    async: 'createdAsyncDirectory'
}

//sync
//fs.mkdirSync(`mkdir/${dirNames.sync}`, 0655) //default 0777

//async
fs.mkdir(`mkdir/${dirNames.async}`, (error)=> {
    if(error){
        throw error
    }
    console.log('Async directory created.')
})

//Note: if he directory is already created and you run the code, it will throw error.