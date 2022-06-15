console.log((Math.random()*3).toString(24).slice(Math.round(Math.random()*10)));
console.log('#'+Math.random().toString(16).slice(2));
console.log('rgb'+'('+Math.round(Math.random()*240)+','+Math.round(Math.random()*240)+','+Math.round(Math.random()*240)+')');
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let new_arr = []
for (let country in countries){
    new_arr.push(countries[country].toUpperCase());
}
console.log(new_arr);
let new_arr2 = []
for (let country in countries){
    new_arr2.push(countries[country].length);
}
console.log(new_arr2);
let new_arr3 = []
for (let country in countries){
    new_arr3.push([countries[country],countries[country].toUpperCase().slice(0,3),countries[country].length]);
}
console.log(new_arr3);
let new_arr4 = []
for (let country in countries){
    if(countries[country].includes('land')){
        new_arr4.push(countries[country]);
    };
}
console.log(new_arr4);
let new_arr5 = []
for (let country in countries){
    if(countries[country].includes('ia')){
        new_arr5.push(countries[country]);
    };
}
console.log(new_arr5);
console.log(countries[new_arr2.indexOf(Math.max(...new_arr2))])
let new_arr6 = []
for (let country in countries){
    if(countries[country].length==5){
        new_arr6.push(countries[country]);
    };
}
console.log(new_arr6);
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let new_arr7 = []
for (let tech in webTechs){
    new_arr7.push(webTechs[tech].length);
}
console.log(new_arr7);
console.log(webTechs[new_arr7.indexOf(Math.max(...new_arr7))])
let new_arr8 = []
for (let tech in webTechs){
    new_arr8.push([webTechs[tech],webTechs[tech].length]);
}
console.log(new_arr8);
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let new_arr9 = []
for (let stack in mernStack) {
    new_arr9.push(mernStack[stack][0])
}
console.log(new_arr9.join(''));
let webtek=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let tech in webtek){
    console.log(webtek[tech]);
}
let fruits=['banana', 'orange', 'mango', 'lemon']
for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let arr in fullStack){
    for(let subArr in fullStack[arr]){
        console.log(fullStack[arr][subArr]);
    }
}
