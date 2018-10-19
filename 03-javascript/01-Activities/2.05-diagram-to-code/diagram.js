var numPizza = prompt("How many pizzas do you want?");

if (numPizza > 3) {
    var count = 0;
    while (count < numPizza) {
        alert("Here's a pizza for you. ");
        count++;
    }
}
else {
    alert("What's wrong with you?");
}
