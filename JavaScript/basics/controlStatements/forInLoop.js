//in for in loop variable takes the key 

//for objects
var colors = {
    first : 'saffron',
    second : 'white',
    third : 'green'
}

for (var color in colors)
    console.log(color + ' -> ' + colors[color])

//for Arrays
var colors = [ 'saffron', 'white', 'green' ]
for (var color in colors)
    console.log(color + ' -> ' + colors[color])


//forin objects
var person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (var key in person) {
    console.log(key + ': ' + person[key]);
  }
  