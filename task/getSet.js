class Person{
    constructor(name, city){
        this.name = name,
        this.city = city;    
    }
    set setName(name){
        this.name = name
    }
    set setCity(city){
        this.city = city
    }
    get getName(){
        return this.name
    }
    get getCity(){
        return this.city
    }
}
person1 = new Person('tony', 'newYork');
person2 = new Person();
console.log(person1)
person2.setName ='spider man'
person2.city ='newJersy'
console.log(person2)