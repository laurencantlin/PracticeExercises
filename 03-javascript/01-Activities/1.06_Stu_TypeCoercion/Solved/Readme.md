# Type Coercion

* Walk through each expression with the students

```
4 + false

"7" + 4

7 + "4"

"7" - 4

7 - "4"
```

* In the first expression `4 + false`, false is coerced to the number `0`

* In `"7" + 4`, `4` is coerced to the string `"4"`

* In `7 + "4"`, `7` is coerced to the string `"7"`

* In `"7" - 4`, `7` is coerced to the number `7`

* Explain to the class that the plus operator `+` has a meaning when used with numbers (addition) and with strings (concatenation), so in `"7" + 4`, the number can be coerced (converted) to a string and the two values can be concatenated. The minus `-` operator only has meaning when used with numbers, so we have to coerce the string operand to a number.

* Tell students that just like we can coerce numbers to strings and booleans to numbers, we can also coerce numbers and strings to booleans. Coercing values to booleans is the most common use of coercion in javascript and we'll learn all about it soon. 
