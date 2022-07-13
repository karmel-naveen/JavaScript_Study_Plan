1
class Animal {
    constructor (name,age,color,legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = color
    }
    describe(){
        return 'Its name is '+this.name+' and its '+this.color+' in color.'
    }
}
let cat1 = new Animal('SnowBell',7,'White',4);
console.log(cat1);
console.log(cat1.describe());
2
class Dog extends Animal {
    describeDog() {
        let line = this.describe()
        return line
    }
}
let dog = new Dog('Dalmation',2,'White & Black',4);
console.log(dog);
console.log(dog.describeDog());
3
class Cat extends Animal {
    describeCat() {
        let line = this.describe()
        return line
    }
}
let cat = new Cat('SnowBell',7,'White',4);
console.log(cat);
console.log(cat.describeCat());