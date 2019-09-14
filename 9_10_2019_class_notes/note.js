var ltvFunction = function(ARPA, MM, churn){
	var LTV = (ARPA*MM)/churn;
	return LTV;
}

console.log(ltvFunction(10,2,5));
console.log("Steve thinks the LTV should be " + ltvFunction(5,4,3));
console.log("John thinks the LTV should be" + ltvFunction(5,20,3));


var areaFunction = function(r){
	var area = (r*r) * 3.14
	return area
}
console.log(areaFunction(5));
console.log(areaFunction(10));

