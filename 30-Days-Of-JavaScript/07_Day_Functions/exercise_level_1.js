1
function fullName() {
    console.log('KARMEL NAVEEN M S')
}
fullName();
2
function fullName2(fname,lname) {
    return fname+" "+lname
}
console.log(fullName2('karmel','naveen'));
3
function addNumbers(num1,num2) {
    return num1+num2
}
console.log(addNumbers(34,34312));
4
function areaOfRectangle(length,width){
    return length*width
}
console.log(areaOfRectangle(23,23));
5
function perimeterOfRectangle(length,width){
    return 2*(length+width)
}
console.log(perimeterOfRectangle(23,23));
6
function volumeOfRectPrism(length,width,height) {
    return length*width*height
}
console.log(volumeOfRectPrism(23,23,23));
7
function areaOfCircle(radius) {
    const pi =Math.PI
    return Math.round(pi*radius**2)
}
console.log(areaOfCircle(5));
8
function circumOfCircle(radius) {
    const pi =Math.PI
    return Math.round(2*pi*radius)
}
console.log(circumOfCircle(5));
9
function density(mass,volume) {
    return Math.round(mass/volume)
}
console.log(density(39874,4589));
10
function speed(distance,timeTaken) {
    return Math.round(distance/timeTaken)
}
console.log(speed(100,2.5))
11
function weight(mass,gravity=9.81) {
    return mass*gravity
}
console.log(weight(25));
12
function convertCelsiusToFahrenheit(celsius){
    return (celsius*(9/5))+32
}
console.log(convertCelsiusToFahrenheit(34));
13
function bmi(height,weight) {
    //cm to m
    let bmi = weight/((height*0.01)**2);
    if(bmi<18.5){
        return "Underweight";
    }else if(bmi>=18.5 && bmi<=24.9) {
        return "Normal weight";
    }else if(bmi>=25 && bmi<=29.9) {
        return "Overweight";
    }else{
        return "Overweight";
    }
}
console.log(bmi(184,82));
14
function checkSeason(Month) {
    let month = Month.toLowerCase()
    if (month == 'september'||month == 'october'||month == 'november') {
        return 'Autumn'
    } else if(month == 'december'||month == 'january'||month == 'february') {
        return 'Winter'
    } else if(month == 'march'||month == 'april'||month == 'may') {
        return 'Spring'
    } else if(month == 'june'||month == 'july'||month == 'august') {
        return 'Summer'
    }else {
        return 'This is not a month'
    }
}
console.log(checkSeason('july'));
15
function findMax(num1,num2,num3) {
    if(num1>num2 && num1>num3){
        return num1
    }else if (num2>num1 && num2>num3){
        return num2
    }else {
        return num3
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

