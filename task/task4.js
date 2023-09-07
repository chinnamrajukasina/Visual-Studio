//program include object, constructor, prototype





//loops and conditions

let n=13
for(i=1;i<=n;i++){
    if(i%2==0)
        console.log(i,'is even')
    else
        console.log(i,'is odd')
}

//sqare of elements in an array
myArray=[1,2,3,4,5,6]
myArray.forEach(element => console.log(element*element));

//"for in " Arrays
var colors = [ 'saffron', 'white', 'green' ]
for (var color in colors)
    console.log(color + ' -> ' + colors[color])

// "for of" arrays
var colors = ['saffron', 'white', 'green'];
for (var color of colors) {
  console.log(color + ' -> ' + colors.indexOf(color));
}

