let firstName = 'karmel';
let lastName = 'naveen';
let country = 'India';
let city = 'Bangalore';
let age = 22;
let isMarried = false;
const now = new Date()
let year = now.getFullYear();
console.log(typeof firstName,typeof lastName,typeof country,typeof city,typeof age,typeof isMarried,typeof year);
console.log(typeof '10' == 10);
console.log(parseInt('9.8')==10);
let israining = true;
if (israining){
    console.log('Take an umberlla');
}else {
    console.log('Nothing');
}
israining = false;
if (israining){
    console.log('Take an umberlla');
}else {
    console.log('Nothing');
}
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let var1 = 'python'
let var2 = 'jargon'
console.log(var1.length != var2.length);
console.log('------------');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
let var3 = 'dragon'
console.log(!var1.includes('on'));
console.log(!var3.includes('on'));
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
const all_seconds = Date.now();
console.log(all_seconds);
