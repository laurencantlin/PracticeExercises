var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data){
  if(err){
    console.log(err);
    return;
  }

  var dataArr = data.split(",");

  dataArr.map(item => {
    console.log(item);
  });


});
