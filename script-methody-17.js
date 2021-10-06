const fruit = "some fruit";
console.log(fruit.indexOf('fruit')); // оиск подстроки

const logText = "Some Text";
console.log("slice - " + logText.slice(1,3));
console.log("slice минусовое значение - " + logText.slice(-4,-1));
console.log("substring - " + logText.substring(1,3));
console.log("substr - " + logText.substring(4, 10));

const newNum = 11.5;
console.log("Math.round - " + Math.round(newNum));

const newPxNum = "15.7px";
console.log("parseInt - " + parseInt(newPxNum));
console.log("parseFloat - " + parseFloat(newPxNum));