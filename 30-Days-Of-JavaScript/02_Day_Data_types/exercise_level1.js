let challenge = '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,3));
console.log(challenge.slice(3,challenge.length));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));
let var1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(var1.split(','));
console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(12));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let var2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(var2.indexOf('because'));
console.log(var2.lastIndexOf('because'));
console.log(var2.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));
let var3 = '30 Days of'
let var4 = 'JavaScript'
console.log(var3.concat(var4));
console.log(challenge.repeat(2));