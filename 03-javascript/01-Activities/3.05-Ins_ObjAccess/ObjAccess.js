var player1 = {
  name: "Link",
  health: 55,
  strength: 332,
  isAlive: true,
  points: 5000
}

//dot notation
console.log(player.name);
console.log(player.isAlive);

//bracket notation
var propName = health;
console.log(player1[propName]);

//we can use these same techniques to add or set property values
player1.speed = 5;
console.log(player1);

player1.points = 5300;
console.log(player1);
