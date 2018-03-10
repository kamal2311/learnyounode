const fs = require('fs');
const dirPath = process.argv[2];
const extension = process.argv[3];

const listFiles = (err, list) => {
    if (err) {
        console.error(err);
    }

    list.filter(file => file.endsWith(`.${extension}`))
        .forEach(matchedFile => console.log(matchedFile));

}

fs.readdir(dirPath, 'utf-8', listFiles);


