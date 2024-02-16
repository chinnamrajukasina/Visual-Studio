var n = 5;
console.log(n);
console.log("right triangle");
for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


