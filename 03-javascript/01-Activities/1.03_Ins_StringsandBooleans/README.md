# Strings

* Tell students that strings in Javascript allow us to store a series of characters within double quotes `"` or single quotes `'`.

    * Let students know that if they choose double or single quotes, to continue using one or the other for consistency in their code.

* Explain to student's that we will mostly be using double quotes `"` ourselves.

* Type the following into your console and hit Enter after each line

```
"This is a string!"

"You type any characters you want in here"

"You can even do something called Concatenation! Lets talk about that."
```

* Explain that in addition to being used for mathematical operations, the `+` operator can can be used to concatenate &mdash; that is, to combine &mdash; strings together.

    * By using `+` when typing a string, we can combine our string with other strings or other types like numbers. This is called `concatenation`.

* Run the following code in your console

```
"I can take a string " + "and another string " + "and combine it with a third!"
```

* Point out that we add a space to the end of each string so that it reads normally. Run the following code to illustrate this point

```
"I can take a string" + "and another string" + "and combine it with a third!"
```

* Next run this code in the console

```
"Could I get a high " + 5 + " dude!"
```

* Explain that concatenation allows us to combine more than just strings and that the space is put ahead of `dude` so it prints and reads normally

* Ask the class *why* we might want to concatenate strings? Below is a possible answers:

  * The user inputs their name and we want to combine it with the string `"Welcome "` to say something like `"Welcome Diane"`. Tell students that they will learn how to do this later this class.

# Booleans

* Explain that a `Boolean` is a data type representing one of two values

    * These values are `true` or `false`

* Demonstrate some true and false statements in the console. Type the following into the console, pressing Enter after each line:

```
1 === 1

1 === "1"

"hi" === "hi"

1 === 2

"hi" === "hello"
```

* Tell the class that these expressions evaluate to a `Boolean` value, which is to say that they evaluate to `true` or `false`.

* Emphasize that we use three equals signs `===` to mean "is equal to"

  * line 1 is evaluating whether 1 "is equal to" 1, etc.

* Call on a pair of students and ask why `1 === "1"` evaluates to false.

  * Explain that `1` is a number and `"1"` is a string, so even though they have the same value, they have different types. To evaluate to `true` the things being compared with `===` must be equal in value *and* type.
