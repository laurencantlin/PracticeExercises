//these two variables are `Global Variables`
var name = "Tammer"
var age = 27

var whoAmI = function (){
    //these two variables are `Local Variables`
    var name = "Christian";
    var age = 26;
    console.log(name);
    console.log(age);
}
//this will log our LOCAL variables `name` and `age`
whoAmI();
// this will log our GLOBAL variable `name`
console.log(name);
// this will log our GLOBAL variable `age`
console.log(age);
