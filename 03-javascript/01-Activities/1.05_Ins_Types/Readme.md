# All about Type

* Explain that the `typeof` operator is a special operator that allows us to check the type of a value or expression

* Open the Chrome Console and type the following one line at a time:


```
    typeof "Jan"

    typeof 3.14

    typeof false

    typeof [1, 2, 3, 4]
```
* Point out that an expression with the `typeof` operator evaluates to the type of whatever value comes after it.

* Tell the class that the last value is an array (or list of things) which is a special type of object. We'll learn all about arrays and objects later.
 ---

 * So far we've learned about numbers, booleans, and strings. Ask the students, what happens if we use the plus `+` operator on two numbers.

 ```
 4 + 3;
 ```

  * The numbers are added and the console prints `7`

 * Ask what happens if we use the plus `+` operator on two strings.

 ```
"Hello " + "class";
 ```
  * The strings are concatenated (combined) and the console prints `"Hello class"`

 * Ask what happens when we use the plus `+` operator on two **different** types like a number and a string

 ```
 4 + " cows";
 ```

  * Run the above code in the console and point out that it prints `"4 cows"`. Remind the class that in the console numbers print in blue and strings print in red. Ask the class what the type of `"4 cows"` is.

  * It's a string! Even the `"4"`. Explain the following points:

    * When we use the plus `+` operator on a string and a number, the javascript engine has to decide whether we are trying to add things (like numbers) or concatenate things (like strings).

    * Since you can't add `4` + `" cow"`, it assumes that we want to concatenate. But you can only concatenate strings, so the number is **converted** to a string.

    * Even though we typed in `4`, the javascript engine changes it behind the scenes to `"4"`. We call this process of converting between types `coercion`.

    * Any time you use the plus `+` operator on a number and a string, the number will be **coerced** to a string.

* Ask the class if they have any questions before moving on.

---

* Tell the class that we're going try a trickier one. Let's use the plus `+` operator on a number and a boolean. Type the following in the console:

```
1 + true;
```
* It evaluates to two, ask why?

  * **Ans:** `true` is being coerced to the number `1` and `1 + 1` is `2`

* Cover the following points:

  * The plus `+` operator means addition when used on numbers and concatenation when used on strings, but it has no meaning when used on booleans. `1` + `true` is a meaningless thing to say, so the javascript engine has to convert the boolean into a number.

  * In computer science, true is often represented by `1` and false is often represented by `0`, so javascript follows this convention. If a boolean has to be turned into a number it turns `true` into `1` and `false` into `0`.

* Type the following in the console one line at a time and ask students what each expression will evaluate to:

```
true + true;

false + false;

"high" + 5;

5 + "5";
```
