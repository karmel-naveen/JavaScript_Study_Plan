var prompt = require('prompt');
// Function call
prompt.start();
// 1
prompt.get(['base', 'height'], function (err, result) {
    // Printing the result
    console.log('Command-line input received:');
    console.log('Base: ' + result.base);
    console.log('Height: ' + result.height);
    console.log('The area of the triangle is ' + Math.round(0.5*result.base*result.height));
});
// 2
prompt.get(['a', 'b','c'], function (err, result) {
    console.log('The perimeter of the triangle is ' + Math.round(parseFloat(result.a)+parseFloat(result.b)+parseFloat(result.c)));
});
// 3 
prompt.get(['length', 'width'], function (err, result) {
    console.log('The area of the rectangle  is ' + Math.round(parseFloat(result.length)*parseFloat(result.width)));
    console.log('The perimeter of the rectangle  is ' + Math.round(2*(parseFloat(result.length)+parseFloat(result.width))));
});
// 4
prompt.get(['radius'], function (err, result) {
    const pi = Math.PI
    console.log('The area of the circle  is ' + Math.round(pi*parseFloat(result.radius)**2));
    console.log('The circumference  of the circle  is ' + Math.round(2*pi*parseFloat(result.radius)));
});
// 5
console.log("According the fomula: slope = mx+b : 2 is the slope and y intercepts = (0,2) and x intercepts = (1,0)");
// 6
let x1,y1;
let x2,y2;
prompt.get(['x1','y1','x2','y2'], function (err, result) {
    console.log('Enter the coordinates :');
    console.log('The x1 is : '+result.x1);
    x1 = parseFloat(result.x1);
    console.log('The y1 is : '+result.y1);
    y1 = parseFloat(result.y1);
    console.log('The x2 is : '+result.x2);
    x2 = parseFloat(result.x2);
    console.log('The y2 is : '+result.y2);
    y2 = parseFloat(result.y2);
    console.log('The slope is : '+Math.round((y2-y1)/(x2-x1)));
});
// 7 
console.log('Both the slopes above are equal to : 2');
// 8
let x;
prompt.get(['x'], function (err, result) {
    x = parseInt(result.x);
    console.log('the value of the y is :'+(x**2+(6*x)+9));
});
// 9
prompt.get(['hours','rate_per_hour'], function (err, result) {
    let hours = parseFloat(result.hours);
    let rph = parseFloat(result.rate_per_hour);
    console.log('Your weekly earning is '+Math.round(hours*rph));
});
// 10
console.log('Enter your Name :')
prompt.get(['name'], function (err, result) {
    if (result.name.length > 7){
        console.log('Long');
    }else {
        console.log('Short');
    }
});
// 11
console.log('Enter your Name :')
prompt.get(['fname','lname'], function (err, result) {
    if (result.fname.length >= result.lname.length){
        console.log(`Your first name, ${result.fname} is longer than your last name, ${result.lname}`);
    }else {
        console.log(`Your last name, ${result.lname} is longer than your first name, ${result.fname}`);
    }
});
// 12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge-yourAge} years older than you.`);
// 13
prompt.get(['year'], function (err, result) {
    const now = new Date;
    let year = now.getFullYear();
    let value = year - parseInt(result.year) ;
    if (value > 18){
        console.log(`You are ${value}. You are old enough to drive`)
    }else {
        console.log(`You are ${value}. You will be allowed to drive after ${18-value} years.`)
    }
});
// 14
prompt.get(['year'], function (err, result) {
    let year = parseInt(result.year);
    //one year = 31,556,952 sec
    console.log(`You lived ${year*31556952} seconds.`)
});
// 15
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);




