//in for of loop variable takes the value 


// for arrays
var scores = [12,34,56,78]
for(var score of scores)
    console.log(score)


// entries() method
var colors = [ 'saffron', 'white', 'green' ]
for (var [index, color] of colors.entries())
    console.log(color + ' -> ' + colors[color])