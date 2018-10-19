# Code Along - Lets write some JavaScript!

* Remind students that in the console we put in an `expression` and it logs out a value that the expression evaluates to. This terminology is important to understand. Re-emphasize that all `expressions` evaluate to a single value.

  * For example: `4 + 2` evaluates to `6`, `"Hello " + "world"` evaluates to `"Hello world"`

* So far we've learned about three types of values. Call on three students to tell you the types of values that we've learned:

  * **Ans:** string, number, and boolean

* Open up the browser and then navigate into the Chrome Console and ask students to code along.

* Write out a string using double or single quotes.

    * What's your favorite holiday?

    * What's your favorite food?

    * How many hours do you code a week? (Concatenate with a number!)

* As the students write their answers, write your own or use the following

```
"Halloween"

"Peanut butter and pickle sandwiches"

55 + " hours per week"
```

* Call on a student and ask what type of value each of these expression evaluates to

  * **Ans:** string

* Now type the following in the Console:

  * Call on students after each line **before** you hit Enter and ask what they think the expression will evaluate to.

```
4 > 5

4 < 5

4 === 5

4 !== 5
```

* Ask the class, what type of value these expressions evaluated to:

  * **Ans:** boolean

* Explain that the `!` is semantically equivalent to "not". So `!==` mean "is **not** equal to" and that `>`  means "is greater than" and `<` mean "is less than"

---

* Take a moment to ensure that students understand *why* we might want to use these different types:

  * We may use a string to store a user's name and display it to the page

  * We may use numbers to build a calculator applications

  * We may use booleans to add sophisticated logic to our website.

    * For example, if we were building a website for a wine retailer, we could ask users to enter their age and then use an expression that evaluates to a boolean to determine if age is less than 21. If the expression "age is less than 21" evaluates to true, we would not allow that user to enter the online store.

    * Ensure students that we will learn more about how to write this sophisticated logic next class.
