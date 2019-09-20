var numbers = [3,8,12,1,6,15,3];

// add All The values in the Array and Print to screen

var final = 0;


for(var i=0;i<numbers.length; i++) {

final += numbers[i];     
}
   console.log(final);

//using the for loop and if statements inside the for loop
//Find the largest number in the array

var largestNumber = 0;
for(var i=0;i<numbers.length;i++) {
  if (numbers[i] > largestNumber) {
  largestNumber = numbers[i];
}
}
console.log(largestNumber);



//Step 1
// create a for loop that creates an array of 100 random numbers
//
//Step 2
// from the random number array created above, find the smallest number

var array =[];
for(var i=0;i<100;i++) {
 var randomNumber = Math.random()*100;
 array.push(randomNumber);
}
console.log(array);

var smallestNumber = array[0];
for(var i=0;i<array.length;i++) {
  if (array[i] < smallestNumber) {
  smallestNumber = array[i];
}
}
console.log(smallestNumber);



