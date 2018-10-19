# Callback functions

Briefly explain callback functions to students. Reassure them that it's okay if this seems hard to grasp at first. Explain that they'll work with callback functions a lot in this class and in their future careers, and this is just a high level overview.

* open [callbacks.html](callbacks.html) or preferably live code the example

* Before you start coding explain that any variable can be passed to a function as a parameter regardless of type. This means we can pass booleans, strings, arrays, or even *functions*

* We often pass a function as a parameter to another function. The function passed in is known as a `callback function`

* Ask the class why we might want to use a `callback function`. Give them a moment to mull it over and then explain that sometimes we want to make sure certain things happen before we execute the code in the callback.

* Start by coding a function called printName that takes a parameter called name like in `callbacks.html`. Be sure to point out that this is just a normal function like every other function we have written.

* Now write the greeting function. Point out that the greeting function takes a callback function as a parameter and writes "Welcome" before calling the callback function.

* Open the html file in the browser and point out how our greeting prints in the proper order because we wrote "Welcome" before calling the printName function.

* Students will likely wonder why not just make on function that writes `"Welcome " + name`. Tell students that this is a contrived example to demonstrate *how* a callback function works. Callback functions are used when we need to wait for something to happen before our callback function runs. For example, we may want to wait for a user to click on a button before we run a certain callback function. 
