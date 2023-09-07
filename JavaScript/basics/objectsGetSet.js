class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName;
    }
    /**
     * @param {string} newCompany
     */
    set changeCompany(newCompany){
        this.company=newCompany
    }
}

person1 = new Person('Tony','Stark');
console.log(person1);
Person.prototype.company='Startup';
console.log(person1.firstName ,person1.lastName ,'company is ',person1.company);
person1.changeCompany='Avengers';
console.log(person1)