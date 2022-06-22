const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {        
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
1
Object.keys(users).forEach(user=>{
    console.log(`${user} has `+users[user].skills.length+` skills`)
})
2
let loggedin = 0
let above50 = 0
Object.keys(users).forEach(user=>{
    if(users[user].isLoggedIn==true){
        loggedin+=1
    }
    if(users[user].points>=50){
        above50+=1
    }
})
console.log('No of logged in are '+loggedin+' and No of user with points above 50 are '+above50);
3
let Mern_stack = [];
Object.keys(users).forEach(user=>{
    let arr= users[user].skills
    arr.forEach(skill=>{
        if(skill=='MongoDB' && 'Express' && 'React'&& ('Node'||'Node.js')) {
            Mern_stack.push(user);
        }
    })
})
console.log(Mern_stack);
4
const copyUser = Object.assign({}, users)
copyUser.karmel = {
    email:'Karmel@djeoij.com',
    skills:['every humanly possible skills'],
    isLoggedIn:true,
    points:Infinity,
    age:1000
}
console.log(copyUser);
5
console.log(Object.keys(users));
6
console.log(Object.values(users));
7
//Could'nt find countries object


