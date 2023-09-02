var personObj = {
    firstName : 'Raju',
    mobile : 8789789,
    country : 'India'
}
console.log(personObj)

//dot notation
console.log(personObj.firstName)

//bracket notation
console.log(personObj['firstName'])


var ironMan = {
    firstName : 'Tony',
    lastName : ' Stark',
    friends : ['War Machine','Pepper Potts', 'Happy Hogan', 'spiderman'],
    address : {
        city: 'NewYork',
        pincode : 123456
    }
}
console.log(ironMan)
console.log(ironMan.friends[3])
console.log(ironMan.address.city)
// to delete a property... delete keyword
delete ironMan.address.pincode
console.log(ironMan)

