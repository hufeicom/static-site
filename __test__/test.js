const path = require('path')
const glob = require("glob")
console.log(glob, Object.keys(glob))

const fs = require('fs')
function getEntries(){
    const rootDir =  path.resolve(__dirname, './page')
    const r = glob.sync( '../page/*/*.entry.js')
    console.log( r )
}

getEntries();