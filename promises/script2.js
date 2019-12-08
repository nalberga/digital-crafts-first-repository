const urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

const p0 = axios.get(urls[0]);
const p1 = axios.get(urls[1]);
const p2 = axios.get(urls[2]);
const p3 = axios.get(urls[3]);
const p4 = axios.get(urls[4]);

Promise.all([p0 ,p1 ,p2 ,p3, p4])
.then ((responses) =>  {
  console.log("all the data was fetched!");
  console.log(responses)

})