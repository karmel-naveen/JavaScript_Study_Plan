1
let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
let pattern = /\d+/g;
const income = text.match(pattern);
let Total_income = 0;
income.forEach(value=>Total_income+=parseInt(value));
console.log('Total Income :'+Total_income);
2
let text2 = `The position of some particles on the horizontal x-axis -1,2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction`;
let pattern2 = /-?\d+/g
const points = text2.match(pattern2);
points.sort((a,b)=>{
    return a-b
});
console.log(`distance = ${parseInt(Math.abs(points[0])) + parseInt(Math.abs(points[points.length-1]))}`);
3
function is_valid_variable(word) {
    if(word.match(/[-&$'.?/! ]/g)) {
        return 'Not a variable'
    } else if (word.match(/(^[a-zA-z])/)) {
        return 'Valid Variable'
    }else {
        return 'Not a variable'
    }
}
console.log(is_valid_variable('!first-name'));
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('2first_name'));
console.log(is_valid_variable('first name'));