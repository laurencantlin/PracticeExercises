# Variables

* Remind students again that we've seen values of type number like `4`, `7`, and `9` and values of type string like `"This is a string"` and `"potato"`, and also values of type boolean like `true` or `false`, and we can enter these into the console and combine them with operators to make expressions that evaluate to some new value like `2 * 4` evaluates to `8`.

* Explain that we will often want to store values to use later in our code. We store them using **variables**


* Type the following in the console:

```
var num = 9;
```

* on the next line type:

```
num
```

* And hit enter. Show the class that `num` now evaluates to 9

* When we use the `var` keyword we are creating a variable. A variable is just a way to store a value by a name of our choosing for later use. In this case, we named our variable `num`. So now we can use the word `num` to refer to the value `9`

* Type the following and ask the class what it will evaluate to:

```
num + 4;
```

* It evaluates to `13`.

* Type the following in the same console:

```
var num2 = 5;

num + num2;
```

* Since `num` is `9` and `num2` is `5`, `num + num2` evaluates to `14`

* Ask students *why* we might want to store a value in a variable?

  * Imagine that we needed to use the number `3.14159265358979323846` over and over in our code. It would be awful to type that 100 times. Instead we could store it as a variable called `PI`

  * Or perhaps we want to prompt the user for some information and store that information for use later in a variable called `input`

* Lastly, write the following code in your console:

```
var sum = num + num2;

sum
```

* Before you press enter ask the students what value is stored in `sum`. Press enter and show them that it's `14`. The expression on the **right-hand side** of the equals sign is evaluated **first**. It evaluates to `14`. That value `14` is then stored in the variable `sum` on the left-hand side of the equals sign. We always evaluate the expression on the right-hand side first.
