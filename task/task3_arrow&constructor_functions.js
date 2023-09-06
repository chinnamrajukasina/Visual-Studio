//Arrrow function
let power=(n,m)=> (n**m)
console.log(power(2,3))
console.log(power(10,3))


//constructor function
function user(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
  }

let user1 = new user('Raju', 27, 'Ravulaplem')
console.log(user1)
let user2 = new user('vijay', 30, 'Ravulapalem')
console.log(user2)
{
let number = 23;
let result = parseFloat(number);
console.log(result)}
{
let number = 23;
let result = parseFloat(number);
console.log(result)}
{
    let boo = true
    let result = parseInt(boo)
    console.log(result)
}


//using object literal
let person= {
    name: 'sam'
}

//using constructor function
function Person() {
    this.name = 'sam';
  }
  
  // Add a property to the prototype of the Person constructor
  Person.prototype.newGender = 'Male';
  
  let person1 = new Person();
  let person2 = new Person();
  
  console.log(person1.newGender); // Output: 'Male'
  console.log(person2.newGender); // Output: 'Male'
  



const student= {
    //data property
    firstName : 'mounica'
}
//acessor property(getter)
function getName(){
    return this.firstName;
}
console.log(student.getName)
student.getName = 'mounica'
console.log(student.getName)
console.log(person['full name']);