/*

Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor 
to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00
When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.

*/

var snacks = [ 
                
    { name : "Snickers", price : 1.25 },
    { name : "Popcorn", price : 1.00 },
    { name : "Chewing Gum", price : 0.25 },
    { name : "Nuts", price : 0.50 },
    { name : "Cookies", price : 1.70 },
    { name : "Cup Noodles", price : 2.25 }
​
 ];
​
var money = {
    nickle : 0.05,
    dime : 0.10,
    quarter : 0.25,
    dollar : 1.00
};
​
var moneyInserted = [ money.dollar, money.quarter, money.dime ];
​
​
function displaySnacks ( snacks ) {
​
for ( var i = 0; i < snacks.length; i++ ) {
​
console.log( snacks[ i ].name + ": " + snacks[ i ].price );
​
}
​
}
​
function selectedItem ( moneyInserted, snackChosen ) {

var noSnackFound = 0;
​
for ( var i = 0; i < snacks.length; i++ ) {
​
if ( snacks[ i ].name == snackChosen) {
​
noSnackFound = 1;
​
var price = snacks[ i ].price;
​
// print error message if not enough money inserted

if ( price > moneyInserted ) {
​
    console.log( "Not enough money has been inseted!" );
​                             
} 
​
// print item and left over change according to money inserted
​
if ( price <= moneyInserted ) {
 
    // To Do
    console.log( "Thanks for your purchase your change is: " + ( moneyInserted - price ).toFixed( 2 ) );
​
​
}
​
}
​
}
​
if ( snackChosen == null || noSnackFound == 0 ) {
​
// return change
console.log ( "No item was selected" );
​
}

}
​
​
​
displaySnacks ( snacks );
selectedItem ( 20.0, "Popcorn" );

