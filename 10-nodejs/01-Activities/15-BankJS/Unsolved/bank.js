var fs = require("fs");
var total = 0;
var transaction = process.argv[2]
var amount = process.argv[3]


//updates the transaction file
function updateBalance(transaction, amount){
  if(transaction === "withdraw"){
    amount = "-" + amount;
    total -= parseFloat(amount);
  }else{
    total += parseFloat(amount);
  }

  fs.appendFile("bank.txt", "," + amount, function(err){
    if(err){
      return console.log(err);
    };

    console.log("Your new total is: " + total);
  });
};


//This part updates the total based on bank.txt
fs.readFile("bank.txt", "utf8", function(err, data){
  if(err){
    return console.log(err)
  };

  var dataArr = data.split(",");

  dataArr.map(amount => {
    total += parseFloat(amount);
  })

  //update depending on transaction type
  switch(transaction){
    case "deposit":
      updateBalance(transaction, amount);
      break;
    case "withdraw":
      updateBalance(transaction, amount);
      break;
    case "total":
      console.log("Your total is: " + total);
      break;
    case "lotto":
      break;
    default:
      console.log("Please enter a transaction type")
      break;
  }
});
