var isDate = function (input) {
  //   write your code here
	if(input instanceof Date)return true;
	else if(Date.parse(input)){
		return true;
	}
	else return false; 
};  

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
