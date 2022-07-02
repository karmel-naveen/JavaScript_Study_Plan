const { countries } = require('./11_day_starter/data/countries_data');
1
// for (let {name,capital,population,languages} of countries) {
//     console.log(name,capital,population,languages);
// }
2
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name,skills,[,,jsScore,ReactScore]] = student
// console.log(name,skills,jsScore,ReactScore);
3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
let convertArrayToObject = (students)=>{
    let obj_arr = []
    for (let student of students){
        let obj = {}
        let [name,skills,scores] = student
        obj.name = name;
        obj.skills = skills;
        obj.scores = scores;
        obj_arr.push(obj);
    }
    return obj_arr;
}
console.log(convertArrayToObject(students));
4
const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
let {name,age,skills} = student2
let {frontEnd,backEnd,dataBase,dataScience} = skills
console.log(name,age,skills);
console.log(frontEnd,backEnd,dataBase,dataScience);
frontEnd.push({skill:'Bootstrap',level:8});
backEnd.push({skill:'Express',level:9});
dataBase.push({skill:'SQL',level:8});
dataScience.push('SQL');
console.log(name,age,skills);
console.log(frontEnd,backEnd,dataBase,dataScience);