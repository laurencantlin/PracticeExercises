var user = prompt("What's your username?");
var password = prompt("What's your password?");

if (user === "admin" && password === "1234") {
    alert("Welcome to the admin page");
}
else if (user === "average joe" && password === "js rocks") {
    alert("Welcome to the user landing page");
}
else {
    alert("Invalid username and password. Refresh the page to retry");
}
