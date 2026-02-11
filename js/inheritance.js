class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age

    }
    eat(){
        console.log("eat all of thing")
    }
}

class Dog extends Animal{
    constructor (name, age, colour){ // inherited name and age from Animal class
        super(name,age)
        this.colour="Gray";

    }
}
const dog1= new Dog("dogy",23)
dog1.eat()
console.log(dog1);
