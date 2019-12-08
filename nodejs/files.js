const fs = require('fs');

// const data = fs.readFileSync('system.js');
// console.log(data.toString);

//fs.appendFileSync('data.txt','   Another message');


//fs.copyFileSync('data.txt', 'data.bak.txt');

//fs.renameSync('data.bak.txt', 'data.old.txt');

// fs.unlinkSync('data.old.txt');

// const dir  = fs.readdirSync(__dirname);
// console.log(dir);

// fs.mkdirSync('file-system');

// fs.renameSync('data.txt', 'file-system/data.txt');
fs.watchFile('file-system/data.txt', () => {
  console.log('Data file was changed.');

});
