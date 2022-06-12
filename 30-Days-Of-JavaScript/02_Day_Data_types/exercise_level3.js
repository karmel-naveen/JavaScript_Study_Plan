let var1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi;
console.log(var1.match(pattern).length);
var2 = 'You cannot end a sentence with because because because is a conjunction'
let pattern2 = /because/gi;
console.log(var2.match(pattern2).length);
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g,''));
let var4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(var4.indexOf('15000'));
let monthly_pay =var4.substring(9,13);
let bonus =var4.substring(42,47);
let pay2 =var4.substring(67,72)
let total = parseInt(monthly_pay)*12+parseInt(bonus)+parseInt(pay2)*12
console.log(total);