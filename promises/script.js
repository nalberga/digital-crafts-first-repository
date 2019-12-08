axios.get('https://dog.ceo/api/breed/beagle/images/random')
.then(response => {
  console.log("data was fetched");
})
.then(response => {
  console.log("data was fetched");
  return axios.get('https://dog.ceo/api/breed/chow/images/random')
})
.then(response => {
  console.log("data was fetched");
  return axios.get('https://dog.ceo/api/breed/akita/images/random')
})
.then(response => {
  console.log("data was fetched");
  return axios.get('https://dog.ceo/api/breed/dingo/images/random')
})
.then(response => {
  console.log("data was fetched");
  return axios.get('https://dog.ceo/api/breed/eskimo/images/random')
})
.then(response => {
    console.log("data was fetched");
})

.catch(error => {
  

})