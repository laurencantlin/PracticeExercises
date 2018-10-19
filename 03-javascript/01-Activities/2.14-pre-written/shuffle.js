var shuffle = function(a) {
    var randArr = a.slice()
    var j, x, i;
    for (i = randArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = randArr[i];
        randArr[i] = randArr[j];
        randArr[j] = x;
    }

    return randArr;
}
