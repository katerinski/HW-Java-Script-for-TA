// 1.
let x = 1; 
let y = 2; 
let res1 = x + '' + y ;
console.log(res1); // "12" 
console.log(typeof res1); // "string" 

let res2 = true + '' + y;
console.log(res2); // "true2" 
console.log(typeof res2); // "string" 

let res3 = x < y;
console.log(res3); // true 
console.log(typeof res3); // "boolean" 

let res4 = parseInt('nm' + x + y);
console.log(res4); // NaN 
console.log(typeof res4); // "number" 

// 2.
// a)
let z = prompt("Enter your number", "");
let result = (z > 0 && z%2 == 0) ? true : false;
console.log(result);

// b)
let r = prompt("Enter your number", "");
let result1 = (r%7 == 0) ? true : false;
console.log(result1);

// 3.
const array = [];
array.push(7);
array.push('msg');
array.push(7 > 8);
array.push(null);
console.log(array.length);
let yourNumber = prompt("Enter your number", "");
array.push(yourNumber);
console.log(array[4]);
array.shift();
console.log(array);

// 4.
let cities = ["Rome", "Lviv", "Warsaw"];  
let str = '';
for(let i = 0; i < cities.length; i++) {
    if(i < cities.length - 1) {
        str += cities[i] + "*";
    } else {
        str += cities[i];
    }
}
console.log(str);

// 5. 
let isAdult = prompt("Have you reached full age?", "");
if(isAdult < 18) {
    console.log('Sorry, You are too young!');
} else {
    console.log('Congrats! You are full age!');
}

// 6.
let a = Number(prompt("Enter length of first side", ""));
let b = Number(prompt("Enter length of second side", ""));
let c = Number(prompt("Enter length of third side", ""));
let p = ((a + b + c)/2);
let square = (p*(p-a)*(p-b)*(p-c))**(1/2);

if (a < 0 || b < 0 || c < 0) {
    console.log('Incorrect data');
} else {
    console.log(square.toFixed(3));
    if ((c**2 == a**2 + b**2) || (a**2 == c**2 + b**2) || (b**2 == c**2 + a**2)) {
        console.log("The triangle is right-angled");
    } else {
        console.log("The triangle is not right-angled");
    }
}

// 7. 
let todayDate = new Date();
let time = todayDate.getHours();

if (time >= 23 && time < 5) {
    console.log('Good night!');
} else if (time >= 5 && time < 11) {
    console.log('Good morning!');
} else if (time >= 11 && time < 17) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}

switch (time) {
    case (time >= 23 && time < 5):
        console.log('Good night!');
    case (time >= 5 && time < 11):
        console.log('Good morning!');
    case (time >= 11 && time < 17):
        console.log('Good afternoon!');
    case (time >= 17 && time < 23):
        console.log('Good evening!');
}
