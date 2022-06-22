1
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
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
]
2
function signin(name) {
    let logged = 'Signed Successfully'
    users.forEach(user=>{
        let values=Object.values(user);
        if(values.includes(name)){
            logged='U already have a account'
        }
    })
    return logged
}
console.log(signin('Karmel'));
console.log(signin('Asab'));
3
function rateProducts(id,rating) {
    products.forEach(product=>{
        if(product._id==id){
            product.ratings.push({
                userId:id,
                rate:rating
            })
            console.log(product.ratings)
        }else{
            console.log('ID didnt match')
        }
    })
}
rateProducts('aegfal',4.5);
4
function likeProduct(id) {
    products.forEach(product=>{
        if(product.likes.includes(id)){
            product.likes.shift()
            console.log(product.likes)
        }else{
            product.likes.push(id)
            console.log(product.likes)
        }
    })
}
likeProduct('aegfal');
likeProduct('fg12cy');

