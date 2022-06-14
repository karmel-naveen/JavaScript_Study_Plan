var prompt = require('prompt');
// Function call
prompt.start();
// 1
console.log('Enter your age :');
prompt.get(['age'], function (err, result) {
    // Printing the result
    let age = result.age;
    if(age >=18){
        console.log('You are old enough to drive.');
    }else{
        console.log(`You are left with ${18-age} years to drive.`);
    }
});
// 2
const myAge = 25
prompt.get(['age'], function (err, result) {
    // Printing the result
    let age = result.age;
    if(age >myAge){
        console.log(`You are ${age-myAge} years older than me.`);
    }else{
        console.log(`You are left with ${myAge-age} younger than me.`);
    }
});
// 3
let a = 4;
let b = 3;
if(a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is greater than ${a}`);
}
a > b ?console.log(`${a} is greater than ${b}`):console.log(`${b} is greater than ${a}`);
// 4
console.log('Enter a number :');
prompt.get(['number'], function (err, result) {
        // Printing the result
        let number = result.number;
        if(number%2 ==0){
            console.log(`${number} is an even number`);
        }else{
            console.log(`${number} is is an odd number.`);
        }
    });