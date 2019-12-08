// const dns = require('dns');
// try {
// dns.lookup('juniordevelopercentracom', (err,value) => {
//   if(err) {
//     console.log('An error occurred looking up the domain');
//     return;
//   }
//   console.log(value);
// });
// } catch (err) {
//   console.log(err);
// }

const fs = require('fs');

fs.readFile('/none-existent/file/here', (err,data) => {
  if(err) {
    console.log(err);
  
  }
  console.log(data);
});
