1
function userIdGeneratedByUser(char,num) {
    let result_arr = [];
    for (var j=0;j<num;j++) {
        var hexDigits = "0123456789ABCDEF";
        var value = "";
        for (var i = 0; i < char; i++) {
        value+=hexDigits.charAt(Math.round(Math.random() * 15));
        }
        result_arr.push(value);

    }
    return result_arr;
}
console.log(userIdGeneratedByUser(10,3));
2
function rgbColorGenerator() {
    return 'rgb('+Math.round(Math.random() * 256)+","+Math.round(Math.random() * 256)+","+Math.round(Math.random() * 256)+')'
}
console.log(rgbColorGenerator());
3
function arrayOfHexaColors(num) {
    let result_arr = [];
    for (var j=0;j<num;j++) {
    var hexDigits = "0123456789ABCDEF";
    var value = "";
    for (var i = 0; i < 6; i++) {
        value+=hexDigits.charAt(Math.round(Math.random() * 15));
    }
    result_arr.push('#'+value);
    }
    return result_arr;
}
console.log(arrayOfHexaColors(5));
4
function arrayOfRgbColors(num) {
    let result_arr = [];
    for (var j=0;j<num;j++) {
        result_arr.push('rgb('+Math.round(Math.random() * 256)+","+Math.round(Math.random() * 256)+","+Math.round(Math.random() * 256)+')')
    }
    return result_arr;
}
console.log(arrayOfRgbColors(5));
5
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')
console.log(rgbToHex(0, 51, 255));
6
function hex2rgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}
console.log(hex2rgb('#0033ff'));
7
function generateColors(type,num) {
    if(type=='hexa') {
        return arrayOfHexaColors(num);
    } else if(type=='rgb') {
        return arrayOfRgbColors(num);
    }
}
console.log(generateColors('hexa',3));
console.log(generateColors('rgb',3));
8
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray([1,2,3,4]));
9
function factorial(num) {
    let value=1;
    for(let i=1;i<=num;i++){
        value*=i
    }
    return value;
}
console.log(factorial(9));
10
function isEmpty(arr) {
    if(arr.length<1){
        return 'Empty'
    }else{
        return 'Not Empty'
    }
}
console.log(isEmpty([1,2,3]));
console.log(isEmpty([]));
11
const sum = (...args)=>{
    let total = 0;
    args.forEach(value=>total+=value);
    return total
}
console.log(sum(1,2,3));
12
function sumOfArrayItems(arr) {
    let total = 0;
    arr.forEach(value=>{
        if(isNaN(value)){
            console.log('contains not a number');
        }else{
            total+=value;
        }
    })
    return total
}
console.log(sumOfArrayItems([1,2,3,4]));
console.log(sumOfArrayItems([1,'Hello',3,4]));
13
function avgOfArrayItems(arr) {
    let total = 0;
    arr.forEach(value=>{
        if(isNaN(value)){
            console.log('contains not a number');
        }else{
            total+=value;
        }
    })
    return Math.round(total/arr.length)
}
console.log(avgOfArrayItems([1,2,3,4,5]));
console.log(avgOfArrayItems([1,'Hello',3,4]));
14
function modifyArray(arr) {
    if(arr.length<5){
        return 'Not Found'
    }else {
        arr[4]=arr[4].toUpperCase()
        return arr
    }
}
console.log(modifyArray(['hello','world','i am','karmel','naveen','from','india']));
console.log(modifyArray(['hello','world']));
15
function isPrime(num){
    flag=false
    if(num===1){
        return 'neither prime nor composite'
    }
    if(num>1) {
        for(let i=2;i<num;i++) {
            if(num%i==0){
                flag=true
                break
            }
        }
    }
    if(flag) {
        return 'Not Prime'
    }else {
        return 'Prime'
    }
}
console.log(isPrime(12));
console.log(isPrime(11));
16
function unique(arr) {
    if(new Set(arr).size !== arr.length){
        return 'Duplicate values exist'
    }else {
        return 'All are unique'
    }
}
console.log(unique([1,21,3,4,43]));
console.log(unique([1,21,3,43,43]));
17
function sameDataType(arr) {
    return arr.every( (val, i, arr) => typeof val === typeof arr[0]);
}
console.log(sameDataType([1,2,3,4,4]));
console.log(sameDataType(['Hello',2,3,4,4]));
18
function variable(val){
    if(/^[a-zA-Z0-9$_]+$/g.test(val)){
        return 'Is a variable'
    }else {
        return 'Not a variable'
    }
}
console.log(variable('num3'));
console.log(variable('num@'));
19
function sevenRandomNumbers() {
    var arr = [];
    while(arr.length < 7) {
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) {
        arr.push(r);
    }}
    return (arr);
}
console.log(sevenRandomNumbers());
20
function reverseCountries(arr){
    let arr2 = arr
    return arr2.reverse();
}
console.log(reverseCountries(['india','pakistan','china']));


