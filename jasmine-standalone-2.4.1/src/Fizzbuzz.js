var Fizzbuzz = function(){};

// equivalent to a class

Fizzbuzz.prototype.isDivisibleByThree = function(number){
	return this._isDivisibleBy(number, 3);  // use 'this' when calling a private method
};

Fizzbuzz.prototype.isDivisibleByFive = function(number){
	return this._isDivisibleBy(number, 5);  // use 'this' when calling a private method
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number){
	return this._isDivisibleBy(number, 15);  // use 'this' when calling a private method
};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor){
	return (number % divisor === 0);
};

Fizzbuzz.prototype.says = function(number){
	if (number % 15 === 0)
		return "FizzBuzz";
	if (number % 5 === 0)
		return "Buzz";
	if (number % 3 === 0)
		return "Fizz";
	return number;
};


