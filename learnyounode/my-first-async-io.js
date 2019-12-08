const fs = require('fs');  

const file = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  const lines = data.split('\n').length - 1;
  console.log(lines);

});
