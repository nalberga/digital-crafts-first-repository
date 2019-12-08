const express = require('express');
const fs = require('fs');

const app = express();

 app.use(express.static(__dirname + 'public'));

app.get('/random', (req, res, next) => {

  const file = fs.readdir(__dirname,'/public', (err, files) => {
  if(err) {
    console.error(err);
  }else {
    

    file.forEach(files => [Math.floor(Math.random() * files.length)]);
      

    }
  })
  
});


app.listen(3000, () => {
  console.log('server is listening...');
});