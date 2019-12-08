const filter = require('./mymodule');

const folderPath = process.argv[2];
const fileExt = process.argv[3]; //return an array containing the command line

filter(folderPath, fileExt, (err, files) => {   
    if(err) 
      return console.error(err);


    files.forEach((file) => {
      console.log(file);
      
    })
})
