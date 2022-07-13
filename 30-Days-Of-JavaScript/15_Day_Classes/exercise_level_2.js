class Animal {
    constructor (name,age,color,legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs
    }
    describe() {
        return 'Its name is '+this.name+' and its '+this.color+' in color.'
    }
}

class Dog extends Animal {
    constructor (name,age,color,legs,breed) {
        super(name,age,color,legs)
        this.breed = breed
    }
    describe() {
        return 'This Dog\'s name is '+this.name+' and its '+this.color+' in color.'
    }
    get typeOfDog() {
        return this.breed
    }
    set ages(value) {
        this.age =value
    }
}
let chedder = new Dog('Chedder',3,'Sandal White',4,'Beagle');
console.log(chedder);
console.log(chedder.typeOfDog);
chedder.ages = 5
console.log(chedder.describe());