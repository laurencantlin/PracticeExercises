# Calculator Solved

## Instructions

* Once time is up, go over the [Solution](Solved/README.md) to the previous activity. Demonstrate each example in your Chrome Console.

* When you reach the question number 3, which requires the modulo operator, take an extra moment to check students understanding of it.

  * Ask them: "If 10 divided by 4 is 2.5, what is 10 modulo 4?"

  * 2, modulo returns the remainder of the division.

* Once you reach question number 4, where we divide by 0, explain to the class that `Infinity` is a special type of number in JavaScript that is considered larger than all other numbers.

  * Ask the class: "Why would dividing by 0 result in Infinity?"

    * Division counts the number of times we can divide a value and still have some left over. We can divide a number an infinite number of times if we aren't taking away from it.

* When you get to question number 5, the final problem, explain to the class that `NaN` is actually another special type of number in JavaScript that literally means "Not a Number".

  * Ask the class why `10 % 0` might result in `NaN`?

    * Since 10 / 0 would result in Infinity because it isn't ever resolved, it can't have a remainder.

    * If this doesn't make sense, explain that that's usually when we get `NaN` as the result of a arithmetic operation: When we're doing something that doesn't mathematically make sense.

    * Demonstrate how doing `10 / "Hello World"` in your console also results in NaN. We can't divide a number by a string, so the result is "Not a Number".
