var fs = require('fs');
// console.log(process.argv);
const filePath = process.argv[2];
var fileContent = fs.readFile(filePath, 'utf-8', handleRead);

function handleRead(err, data) {
    if(err){
        console.error(err);
    }
    if (data) {
        console.log(data.split('\n').length - 1);
    }
    
}
