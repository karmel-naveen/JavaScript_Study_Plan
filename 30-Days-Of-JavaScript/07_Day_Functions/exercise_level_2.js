1
function solveLinEquation(a,b,c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);      // right
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result+" "+result2;  
}
console.log(solveLinEquation(1,1,-1));
2
function solveQuadEquation(a,b,c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);      // right
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result+" "+result2;
}
console.log(solveQuadEquation(1,1,-1));
3
function printArray(arr) {
    arr.forEach(value=>console.log(value))
}
printArray([1,2,3,42,341,3,134,12,3143]);
4
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/');
}
5
function showDateTime() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        time = d.getHours()+":"+d.getMinutes();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/')+" "+time;
}
const now = new Date();
console.log(showDateTime(now));
function swapValues(x,y) {
    return y+" "+x;
}
console.log(swapValues(3,4))
6
function reverseArray(og_arr){
    let rev_arr=[];
    for(let i=og_arr.length-1;i>=0;i--){
        rev_arr.push(og_arr[i]);
    }
    return rev_arr
}
console.log(reverseArray([1,2,3,4,5,5,6,7,7,78,90]));
7
function capitalizeArray(arr) {
    let cap_arr = [];
    arr.forEach(item=>cap_arr.push(item.toUpperCase()))
    return cap_arr
}
console.log(capitalizeArray(['hello','world']));
8
let test_arr = [1,12,334,12341,13241]
function addItem(item) {
    test_arr.push(item);
    return test_arr
}
console.log(addItem(33123));
9
function removeItem() {
    test_arr.pop();
    return test_arr
}
console.log(removeItem());
10
function sumOfNumbers(arr) {
    let total=0;
    arr.forEach(value=>total+=value);
    return total
}
console.log(sumOfNumbers([12,123,3424,134545,1232,78787]))
11
function sumOfOdds(arr) {
    let odd_Total = 0;
    arr.forEach((value,i)=>{
        if(i%2==0){
            odd_Total+=value
        }
    })
    return odd_Total
}
console.log(sumOfOdds([1,2,3,4,5]));
12
function sumOfEven(arr) {
    let even_Total = 0;
    arr.forEach((value,i)=>{
        if(i%2!=0){
            even_Total+=value
        }
    })
    return even_Total
}
console.log(sumOfEven([1,2,3,4,5]));
13
function evensAndOdds(value) {
    let even = []
    let odd = []
    for(let i=0;i<=value;i++){
        if(i%2==0){
            even.push(i)
        }else {
            odd.push(i)
        }
    }
    return 'The number of odds are '+odd.length+' and number of even are '+even.length
}
console.log(evensAndOdds(1000));
14
function sum() {
    let sum=0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5));
15
function randomUserIp() {
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    return ip
}
console.log(randomUserIp());
16
function genMAC() {
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
console.log(genMAC());
17
function randomHexaNumberGenerator() {
    var hexDigits = "0123456789ABCDEF";
    var value = "";
    for (var i = 0; i < 3; i++) {
        value+=hexDigits.charAt(Math.round(Math.random() * 15));
        value+=hexDigits.charAt(Math.round(Math.random() * 15));
    }

    return '#'+value;
}
console.log(randomHexaNumberGenerator());
18
function userIdGenerator() {
    var hexDigits = "0123456789ABCDEF";
    var value = "";
    for (var i = 1; i < 8; i++) {
        value+=hexDigits.charAt(Math.round(Math.random() * 15));
    }

    return value;
}
console.log(userIdGenerator());

