for(let i=0;i<=10;i++){
    //console.log(i);
}
let i = 0
do{
    console.log(i)
    i++
} while(i<=10)
while(i<=10) {
    console.log(i);
    i++
}
for(let i=10;i>=0;i--){
    console.log(i)
}
let j= 10
do{
    console.log(j)
    j--
}while(j>=0)
while(j>=0){
    console.log(j)
    j--
}
for(let i=1;i<=7;i++){
    console.log('#'.repeat(i));
}
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
for(let i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`)
}
for(let i = 0; i <= 100; i++){
    if(i%2==0){
        console.log(i);
    }
}
for(let i = 0; i <= 100; i++){
    if(i%2!=0){
        console.log(i);
    }
}
let sum1 = 0
for(let i=0;i<=100;i++){
    sum1 +=i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum1}.`)
let sum_even=0
let sum_odd=0
let arr=[]
for(let i = 1;i<=100;i++){
    if(i%2==0){
        sum_even+=i
    }else{
        sum_odd+=i
    }
}
arr.push(sum_even,sum_odd);
console.log(arr);
console.log(`The sum of all evens from 0 to 100 is ${sum_even}. And the sum of all odds from 0 to 100 is ${sum_odd}.`)
let arr13 =[]
for(let i =0;i<5;i++){
    arr13.push(Math.round(Math.random()*100));
}
console.log(arr13);
console.log(Math.random().toString(24).slice(8));