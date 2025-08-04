'use strict'  

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
const calcAge2 = function (birthYeah){
  return 2030 - birthYeah
}

// const age2 = calcAge2(prompt("input years your born 1"))

// console.log(`age 1 = ${age1}`)
// console.log(`age 2 = ${age2}`)


//Arrow function
const calcAge3 = birthYeah => 2030 - birthYeah
const age3 = calcAge3(prompt("input years your born"))
console.log(  age3)