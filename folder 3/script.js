// 'use strict'  

// let hasDriversLicense = false
// const passText = true

// if (passText) hasDriversLicense = true
// if (hasDriversLicense) console.log(`i cant drive :D`)

// const interface = `Audio`
// const private = 534

// function logger(){
//   console.log('My name is Rojabby')
// }

// logger()

// function fruitProcessor (apples, oranges){
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

//  const appleJuice = fruitProcessor(5, 0) 
// console.log( appleJuice )

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log (appleOrangeJuice)

// const num = Number('23')


//Function declaration
// function calcAge1(birthYeah){
//   return 2025 - birthYeah
// }
// const age1 = calcAge1(prompt("input years your born 1"))

//Function expression
// const calcAge2 = function (birthYeah){
//   return 2030 - birthYeah
// }

// const age2 = calcAge2(prompt("input years your born 1"))

// console.log(`age 1 = ${age1}`)
// console.log(`age 2 = ${age2}`)


//Arrow function
// const calcAge3 = birthYeah => 2026 - birthYeah
// const age3 = calcAge3(prompt("input years your born"))
// console.log(age3)

// const yearsUntilRetirment = (birthYeah, firstName) => {
//   const age = 2025 - birthYeah
//   const rentirement = 65 - age 
//   return `${firstName} retires in ${rentirement} years` 
// }

// console.log(yearsUntilRetirment(2006, 'Jonas'))
// console.log(yearsUntilRetirment(2007, 'Bob'))

// function cutFruitPieces(fruit) {
//   return fruit * 10
// } 

// function fruitProcessor(apples, oranges){
//   const applesPieces = cutFruitPieces(apples)
//   const orangesPieces = cutFruitPieces(oranges)


// const juice = `Juice with ${applesPieces} piece of apple and ${orangesPieces} 
//  pieces of oranye`

//  return juice
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah
// }


//  const yearsUntilRetirment = (birthYeah, firstName) => {
//    const age = 2025 - birthYeah
//    const retirement = 65 - age
//    if (retirement > 0 ){
//     console.log(`${firstName} retires in ${retirement} years`)
//     return retirement
//    }else{
//     console.log(`${firstName} has already retired 👌`)
//     return -1
//    }
   
   
//  }

// console.log(yearsUntilRetirment(1991, 'Jonas'))
// console.log(yearsUntilRetirment(1958, 'Mike'))


///////////////////
// Chalage 1 part 2

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const avgDolphinsData1 = calcAverage(Number(prompt("input score 1 dolphins")), Number(prompt("input score 2 dolphins")), Number(prompt("input score 4 dolphins")))
// const avgKoalasData1 = calcAverage(65, 54, 49)
// console.log(`avarage score Dolphins (Data 1): ${avgDolphinsData1}`)
// console.log(`avarage score Koalas (Data 1): ${avgKoalasData1}`)


// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins winner (${avgDolphins} vs. ${avgKoalas})`)
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas winner (${avgKoalas} vs. ${avgDolphins})`)
//   } else {
//     console.log("no one wins ")
//   }
// }


// console.log("the scores of both (Data 1)")
// checkWinner(avgDolphinsData1, avgKoalasData1)

// // --- Data 2 ---

// const avgDolphinsData2 = calcAverage(85, 54, 41)
// const avgKoalasData2 = calcAverage(23, 34, 27)
// console.log(`\navarage score Dolphins (Data 2) ${avgDolphinsData2}`)
// console.log(`avarage score Koalas (Data 2) ${avgKoalasData2}`)


// console.log("the scores of both (Data 2) ")
// checkWinner(avgDolphinsData2, avgKoalasData2)


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


////////////
// ARRAYS  
// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const y = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2025 - birthYeah
// }
// const years = [2005, 2006, 2007, 2008, 2009]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const age4 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3, age4)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]),  calcAge(years[years.length - 2])]
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter']


// const newLength = friends.push('Bob')

// // add last array
// console.log(friends)
// console.log(newLength)

// // add first array
// friends.unshift('Jonathan')
// console.log(friends)

// //remove
// friends.pop()
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))


// friends.push('Budi')
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes('Budi'))


// if (friends.includes(prompt())){
//     console.log('you are my friends')
// } else{
//     console.log('your my enemy, tommorow you will die')
// }



// const calcTip = function(bill) {    
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }


// console.log(`Tip untuk tagihan 100 adalah: ${calcTip(100)}`) 
// //const bills = [125, 555, 44]  bill uji coba 

// const bills = [Number(prompt('input first bill')), Number(prompt('input first bill')), Number(prompt('input first bill'))   ]

// console.log('Array bills : ', bills)

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log('Array tips : ', tips)


// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log('Array total:', totals)



// introduction Object
// const jonasArray = [
//     'Jonas',
//     'Schmedtamnn',
//     2025 - 2007,
//     'teacher',
//     ['Michael','Bob']
// ]

// const jonas = {
//     firstName : 'Rojabby',
//     LastName : 'Jonathan',
//     age : 2025 - 2007,
//     job : 'students',
//     friends : ['Michael','Peter','Steven']
// }



// const jonas = {
//     firstName : 'Rojabby',
//     lastName : 'Jonathan',
//     age : 2025 - 2007,
//     job : 'students',
//     friends : ['Michael','Peter','Steven']
// }
// console.log(jonas)

// console.log(jonas.firstNameName)
// console.log(jonas.lastName)  

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const input = prompt('')

// if(jonas[input]){
//     console.log(jonas[input])
// }else{
//     console.log('Wrong input')
// }

// jonas.location = 'England',
// jonas['twitter'] = '@jonashandsome'
// console.log(jonas)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his best friends is called ${jonas.friends[0]}`)



// const jonas = {
//      firstName : 'Rojabby',
//      lastName : 'Jonathan',
//      birthYeah : 2007,
//      job : 'students',
//      friends : ['Michael','Peter','Steven'],
//      hasDriversLicensce : false,

//     //  calcAge: function (birthYeah){
//     //     return 2025 - birthYeah
//     //  }

//     // calcAge : function(){
//     //     console.log(this)
//     //     return 2025 - jonas.birthYeah
//     // }

//     calcAge: function (){
//         this.age = 2025 - this.birthYeah
//         return this.age
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicensce ? 'a' : 'no'} drivers license `
//     }
//  }

//  console.log(jonas.calcAge())

//  console.log(jonas.age)
//  console.log(jonas.getSummary())

//  console.log(jonas['calcAge'](2007))


//Challenge 


// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,


//   calcBMI: function() {
//     this.bmi = this.mass / (this.height ** 2)
//     return this.bmi
//   }
// }


// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

 
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height ** 2)
//     return this.bmi
//   }
// }


// mark.calcBMI()
// john.calcBMI()


// console.log(`height form Mark : ${mark.bmi.toFixed(1)}`)
// console.log(`height form John : ${john.bmi.toFixed(1)}`)

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) higher than ${john.fullName}'s BMI (${john.bmi.toFixed(1)})!`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(1)})!`)
// } else {
//   console.log("BMI both is the same")
// }


/////////////////
// Looping

// for (let rep = 1; rep < 10; rep++ ){
//     console.log(`test looping ${rep}`)
// }


////////


const jonas = [
     'Jonas',
     'Schmedtamnn',
     2025 - 2007,
     'teacher',
     ['Michael','Bob', 'Steven'],
     true
 ]

 const types = []
  


 for(let i = 0; i < 5; i++){
    console.log(jonas[i], typeof jonas[i])

    // types[i] = typeof jonas[i]

    types.push(typeof jonas[i])


  }

  console.log(types)

  const years = [1991, 2007, 1969, 2020]
  const ages = []

  for (let i = 0; 1 < years.length ; i++){
    ages.push(2037 - years[i])

  } 

  console.log(ages)

  //continue and break

  console.log('-- Continue --')
  for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] !== 'string') continue

    console.log(jonas[i], typeof jonas[i])
  }

  console.log('-- Break --')
  for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] === 'number') break

    console.log(jonas[i], typeof jonas[i])
  }


 


  


