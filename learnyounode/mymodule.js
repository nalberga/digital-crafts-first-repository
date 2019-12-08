const fs = require('fs');
const path = require('path');

function filter(folderPath, fileExt, callback) {
fs.readdir(folderPath, (err, list) => {
  if(err) {
    return callback(err);
  }

  let filteredFiles = [];

  list.forEach((filePath) => {
      if ('.' + fileExt == path.extname(filePath)) {
        filteredFiles.push(filePath);

      }
  })
    callback(null, filteredFiles);
})
}

module.exports = filter;