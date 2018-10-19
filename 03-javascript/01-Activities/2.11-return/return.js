var add = function (parameter1, parameter2) {
    console.log(parameter1 + parameter2);
}

var add2 = function (parameter1, parameter2) {
    return parameter1 + parameter2;
}

var sentenceMaker = function (string1, string2) {
    return string1 + string2;
}

var sentence = "Hello World!";

var isBig = function (num) {
    return num > 10;
}

var num1 = 3;

var num2 = 4;

var sum = add(num1, num2);

var sum2 = add2(num1, num2);

var sentence = sentenceMaker("Moses supposes ", "his toeses are roses");

var overTen = isBig(num1);

var overTen2 = isBig(100);

// console.log("sum is", sum);
// console.log("sum2 is", sum2);
// console.log("sentence is", sentence);
// console.log("overTen is", overTen);
// console.log("overTen2 is", overTen2);
