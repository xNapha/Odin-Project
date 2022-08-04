const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
    let y = 0;
    for(i=0; i< x.length; i++){
        y += x[i]
    }
    return y;
};

const multiply = function(x) {
    let y = 1;
    for(i=0; i< x.length; i++){
        y *= x[i]
    }
    return y;
};

const power = function(x,y) {
    return Math.pow(x,y);
};

const factorial = function(x) {
    if (x<=0){
        return 1;
    }
    return x * factorial(x-1);
};

console.log(factorial(1))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};