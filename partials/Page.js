const marked = require('marked');
const fs = require('fs')

module.exports = class{
    constructor(){
        this.sName = "Parker Layden-Tapp";
        this.sUrlToEmailer = "https://quiet-fortress-89301.herokuapp.com/send/";
    }
    requireMarked(sFname){
        const sDir = process.cwd()
        const sContents = fs.readFileSync(`${sDir}/${sFname}`, 'utf8');
        return marked(sContents);
    }
}
