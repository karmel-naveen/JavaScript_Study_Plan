const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    age:22,
    country:'India',
    city:'Bangalore'
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)
const student = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    age:22,
    country:'India',
    city:'Bangalore'
}
const student_JSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', student_JSON)

const personAccount = {
    firstName:'Karmel',
    lastName:'Naveen',
    incomes:{
        salary:40000,
        rental:20000,
        bonus:10000
    },
    expenses:{
        food:4500,
        dress:9000
    },
    totalIncome:function(){
        return this.incomes.salary+this.incomes.rental+this.incomes.bonus
    },
    totalExpense:function(){
        return this.expenses.dress+this.expenses.food
    },
    accountInfo:function(){
        return 'This account is owned by '+this.firstName +" "+this.lastName
    },
    addIncome:function(type,amount){
        this.incomes[type]=amount
    },
    addExpense:function(type,amount){
        this.expenses[type]=amount
    },
    accountBalance:function() {
        let Total_income=0
        let income =Object.values(this.incomes);
        income.forEach(value=>{
            Total_income+=value
        });
        let Total_expense=0
        let expense =Object.values(this.expenses);
        expense.forEach(value=>{
            Total_expense+=value
        });
        return Total_income-Total_expense
    }
}

const personAcc_JSON = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem('personAccount', personAcc_JSON)