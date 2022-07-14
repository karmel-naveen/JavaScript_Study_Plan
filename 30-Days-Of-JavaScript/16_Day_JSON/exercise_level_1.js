const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
1
const skills_JSON = JSON.stringify(skills);
console.log(skills_JSON);
2
const age_JSON = JSON.stringify(age);
console.log(age_JSON);
3
const isMarried_JSON = JSON.stringify(isMarried);
console.log(isMarried_JSON);
4
const student_JSON = JSON.stringify(student,undefined,4);
console.log(student_JSON);