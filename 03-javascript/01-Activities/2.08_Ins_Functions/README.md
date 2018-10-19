# Defining and Calling Functions

* Explain that in `JavaScript` a function is a block of code designed to perform a specific task

* In JavaScript first we must `define` a function. 

* Open[FunctionDefinition](functionDefinition.js);

* We `define` a function by first using the creating a variable using `var`

* We then give our `var` a `name` and assign its value to a function.

    * Note that the name does not have to be `name` but anything they want

* Following the keyword `function` is a set of Parentheses `()` &mdash; which may include named `parameters` &mdash; seperated by commas `,`

* We then use Curly Brackets `{}` and put our code which we would like executed inside of brackets

* Currently the `value` of our `variable` is the function expression itself

* Open [FunctionValue](../Images/FunctionValue.png) and explain how before invoking the function, the variables value is the function expression

* Open [DeclarationandInvokation](DeclareandCall.js);

* Explain these few major points to the students with the code up on the screen

    * The parameters of our `function` can be named ANYTHING the writer wants

    * After we `define` our function we cannot Call or INVOKE our function without using the following sytnax &mdash; `name(param1, param2);`

* Put the code from `DeclareandCall.js` into the console and demonstrate its output with a few different parameters

    * `sentenceMaker("Hello ", "world");`

    * `sentenceMaker("How are ", "you?");`

* Explain that the strings we input in our `invokation` BECOME the parameters we had declared in our Function Definition

    * `string1` = `"Hello "`

    * `string2` = `"world"` 
