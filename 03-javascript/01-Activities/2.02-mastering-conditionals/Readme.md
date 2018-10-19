# Mock Login

We're going to take a look at how control flow might be used to render different information to the page based on who logs in.

This may feel a bit contrived at the moment, but later in the course we'll use these same tactics along with our database knowledge and authentication middleware to make robust applications.

**HINT:** You'll need to use the logical operators to make more sophisticated expressions in our if statements.

**Be sure to make a diagram before you start coding**

* prompt the user for a username and store the response in a variable.

* prompt the user for a password and store this data.

If the username equals "admin" and the password equals "1234", then write "welcome to the admin page"

If the username equals "average joe" and the password equals "jsRocks", then write "welcome to the user landing page"

Otherwise write "invalid username and password, refresh the page to try again"
