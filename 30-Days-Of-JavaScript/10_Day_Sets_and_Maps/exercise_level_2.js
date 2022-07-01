const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
1
const c = [...a,...b];
const Union = new Set(c);
console.log(Union);
2
const A = new Set(a);
const B = new Set(b);
const inter = a.filter((value)=>B.has(value))
const intersection = new Set(inter);
console.log(intersection);
3
const diff = a.filter((value)=>!B.has(value))
const difference = new Set(diff);
console.log(difference);
