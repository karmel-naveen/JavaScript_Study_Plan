1
const dog = {};
2
console.log(dog);
3
dog.name='Tinku'
dog.legs=4
dog.color='golden'
dog.age=3
dog.bark=function (){
    return 'woof woof'
}
4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
5
dog.breed='Huski'
dog.getDogInfo = function() {
    return 'This dog name is '+this.name+' and his age is '+this.age+'.It belongs to the breed '+this.breed+'.'
}
console.log(dog.getDogInfo());
