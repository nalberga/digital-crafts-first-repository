const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
const fileExt = process.argv[3];  //txt

fs.readdir(folderPath, (err, list) => {
  if (err) {
    return console.error(err);
  }
  list.forEach((filePath) => {
    if ('.' + fileExt == path.extname(filePath)) {  // return the extension of a file path
    console.log(filePath);
    }
  })
})