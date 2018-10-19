# Reuseable Functions

* Open [pre-written.html](pre-written.html) and make an array called `students` containing the names of the students on the front row of your class.

* Ask the class how we would make a new array with these same students in a random order. Give them a minute to think on this before opening [shuffle.js](shuffle.js)

* Open [shuffle.js](shuffle.js), and copy the function then paste it into `pre-written.html` and add:

```
var randStudents = shuffle(students);
```

* `console.log` students and randStudents and show the class the results.

* Reiterate that functions are useful not only for organizing our code, but also because they are reusable. We can use functions for actions that we want to carry out multiple times in our program, but also for actions that we want to execute multiple times across **different** programs.

* Without discussing pure functions in-depth, mention that it is generally preferable that functions don't depend on any outside values other than the parameters that are being passed in. This allows functions to easily be reused across projects.
