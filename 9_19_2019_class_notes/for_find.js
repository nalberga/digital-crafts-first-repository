//we are going to have an array of items
//we are going to create a function with 2 parameters
//the first will be an array to search
// the second parameter will be a value to find

// inside the function, use a for loop to go through the array
// and return true if it finds the second parameter inside teh array
// otherwise return false


var items = ["Cat","Dog","Snake","Ferret","Big Foot"];

var findItem = "Big Foot Wife";
 
var searchItems = function(haystack, needle)  {

     for(var i = 0; i < haystack.length; i++)  {
         if(haystack[i] == needle) {
   
                  return true;

     }
  }
     return false;
}
var result = searchItems(items,findItem);
console.log(result);


