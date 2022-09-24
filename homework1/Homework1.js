// Practical task 

// 1. 

// 2.
console.log("Sotnykova");

// 3. 
let x,y;
let x = 2;
let y = 5;
console.log(x, y);
alert(x, y);
y = x;
console.log(x, y);
alert(x, y); 

// 4. 
const newObj = {
   String: "some string",
   Number: 4,
   Boolean: true,
   Undefined: undefined,
   Null: null
};

// 5. 
let isAdult = confirm("Have you reached full age?");
console.log(isAdult);

// 6. 
let myName, surName, group, yearOfBirth;
let myName = 'Kate';
let surName = 'Sotnykova';
let group = 'JS for TA';
let yearOfBirth = 1984;
let marrigeStatus;
let marrigeStatus = true;

console.log(typeof yearOfBirth);
console.log(typeof marrigeStatus);
console.log(typeof myName);
console.log(typeof surName);
console.log(typeof group);

let undefVar, nullVar;
console.log(typeof undefVar);
let nullVar = null;
console.log(typeof nullVar);

// 7.
let login = prompt("What is your login?", "");
let email = prompt("What is your email?", "");
let password = prompt("What is your password?", "");
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);
 
// 8.
let secondsInHour = 60 * 60;
console.log(`In hour ${secondsInHour} seconds`);
let secondsInDay = secondsInHour * 24;
console.log(`In day ${secondsInDay} seconds`);
let secondsInMonth = secondsInDay * 30;
console.log(`In month ${secondsInMonth} seconds`);
