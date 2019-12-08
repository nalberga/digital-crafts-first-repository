const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

let count = 0;

app.get('/ping', (req, res, next) => {
  res.send('PONG');
})

// POST increment
    app.post('/increment', (req, res, next) => {
      
      count += Number.parseFloat(req.body.number);
      res.json({ count: count});

    })

    // //res.json({
    //   count: count
    // })

// POST decrement

    app.post('/decrement', (req, res, next) => {
      count -=1;
      res.send(`{count: ${count}}`);
    })

// GET /value
app.get('/value', (req, res, next) => {
  res.json({ count: count})
});



app.listen(3000, () => {
  console.log('listening on port 3000');

})