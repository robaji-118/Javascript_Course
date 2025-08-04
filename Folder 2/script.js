
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);


//  Values and Variables
// console.log("Jonas");
// console.log(23);

// // let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);


// // Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let yearValue;
// console.log(yearValue);
// console.log(typeof yearValue);

// yearValue = 1991;
// console.log(typeof yearValue);

// console.log(typeof null);


// // let, const and var
// let age = 30;
// age = 31;

// // const birthYear = 1991;
// // // birthYear = 1990;
// // // const job;

// // var job = 'programmer';
// // job = 'teacher'

// // lastName = 'Schmedtmann';
// // console.log(lastName);


// // Basic Operators
// // Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; 
// x += 10; 
// x *= 4; 
// x++; 
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);


// // Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);




// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);



// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);




// Coding Challenge #2


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }






// Type Conversion and Coercion :


// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);



////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = "18"

// if (age === 18) console.log("You just become an adult :D (strict)")

// if (age == 18) console.log("You just become an adult :D (loose)")
 

// const favourite = Number(prompt("What,s your favourite number")) 
// console.log(favourite)
// console.log(typeof favourite)

// if (favourite === 15) {
//   console.log("Cool! " +  favourite  + " is an amazing number!")
// } else if ( favourite === 10 ){
//   console.log("Your number " +  favourite  + " that so cool for me")
// } else if ( favourite === 20 ){
//   console.log("Your number " +  favourite  + " that so cool for me")
// } else {
//   console.log("Number is not 15 or 10 or 20")
// }

// if (favourite !== 15) console.log("Why not 15?")   

// const hasDrivesLisences = true
// const hasGoodVision = true

// console.log(hasDrivesLisences && hasGoodVision)
// console.log(hasDrivesLisences || hasGoodVision)
// console.log(!hasDrivesLisences)

// //                                                                                          
// const isTired = false
// console.log(hasDrivesLisences && hasGoodVision && isTired)

// if (hasDrivesLisences && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive")
// } else{
//   console.log("Someone else should drive...")
// }


///////////////////////////////

//Coding Challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins){ 
//   console.log("Koalas win the trophy")
// }else if (scoreKoalas === scoreDolphins){ 
//   console.log("Both win the trophy")
// }


// const scoreDolphins = (97 + 112 + 101) / 3
// const scoreKoalas = (109 + 95 + 106) / 3
// console.log( " scores dolphins = " , scoreDolphins,)
// console.log( " scores koalas = ",   scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){ 
//   console.log("Koalas win the trophy")
// }else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100){ 
//   console.log("Both win the trophy")
// }else{
//   console.log("No one wins the trophy ")
// }

///////////////////////////////////
//The Switch Statement

// const day = prompt("")

// switch(day) {
//   case "monday":
//     console.log("Try 1 Monday")
//     console.log("Try 2 Monday")
//     console.log("Try 3 Monday")
//     break
//   case "tuesday" :
//     console.log("prepare theory videos");
//     console.log("Tuesday");
//     break
//   case "wednesday" :
//     console.log("this Wednesday ")
//     break
//   case "thursday" :
//     console.log("Thursday")
//     break
//   case "friday" :
//     console.log("This is Friday")
//     break
//   case "saturday" :
//     console.log("Saturday")
//     breakc
//   case "sunday" :
//     console.log("Enjoy the weekend :D")
//     break
//   default:
//     console.log("Not a valid day!")
// }

// if (day === "monday"){
//   console.log("Plan Course structure")
//   console.log("Go to coding meetup")
// } else if (day === "tuesday"){
//   console.log("testing statement tuesday")
// } else if (day === "wednesday" || day === "thursday"){
//   console.log("testing statement tuesday and thursday")
// }  else if (day === "friday"){
//   console.log("testing statement friday")
// } else if (day === "saturday" || day === "sunday"){
//   console.log("testing statment saturday dan sunday")
// }else{
//   console.log("not found")
// }


//////////////////
// Statements adn expressions

// 3 + 4
// 1991
// true && false && !false

// if (23 > 10){
//   const str = "23 is bigger"
// }


// const me = "Rojabby"
// console.log(`I'm ${2007 - 2000 } years old ${me}`)

////////////////
// The conditional Ternary



// const age = Number(prompt()) 
// age >= 18 ? console.log(`I like to fruit apple 🍎`) :
// console.log(`I like to fruit avocando 🥑`)


// const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
// console.log(drink)

// let drink2;
// if (age >= 18){
//   drink2 = 'wine 🍷'
// }else{
//   drink2 = 'water 💧'
// }

// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)

const bill = Number(prompt())
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
