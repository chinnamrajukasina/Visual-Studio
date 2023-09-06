const raju = {
    name : 'Raju',
    gender : 'male' ,
    address :{
        doorNo: '2-109',
        village: 'Ravulapalem'
    }
}
console.log(raju)
console.log(raju.address.doorNo)

const person = {
    name: 'Sam',    
    age: 30,    
    // using function as a value 
    greet: function() { console.log('hello')}    
    }
    
    person.greet(); // hello
    console.log(person.name )
    console.log(person.age)