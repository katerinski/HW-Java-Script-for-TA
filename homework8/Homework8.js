// 1.
function checkRegister(string) {
    let regExp = /[A-Z]/;
    if (regExp.test(string.charAt(0))) {
        console.log("String starts with uppercase")
    } else {
        console.log("String NOT starts with uppercase")
    }
}
checkRegister('regexp');
checkRegister('RegExp');

// 2. 
function validEmail(email) {
    let emailRE = /^[A-Za-z0-9]+[@]+\w+[.]+\w+$/;
    if (email.match(emailRE)) {
        return true;
    } else {
        alert("Email is incorrect!");
        return false;
    }
}
console.log(validEmail("Qmail2@gmail.com"));

// 3. 
function findSymbol(string) {
    let regExp = /d(b+)(d)/i;
    return string.match(regExp);
}
console.log(findSymbol("cdbBdbsbz"));

// 4. 
function replacePlaces(string) {
    let reExp = /(\w+)\s(\w+)/;
    let result = string.replace(reExp, "$2, $1");
    return result;
}
let str = "Java Script";
console.log(replacePlaces(str));

// 5. 
function checkCard(cardNumber) {
    let cardRE = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (cardNumber.match(cardRE)) {
        return true;
    } else {
        alert("Card number is incorrect!");
        return false;
    }
}
console.log(checkCard("9999-9999-9999-9999"));

// 6.
function checkEmail(email) {
    let emailRE = /^[A-Za-z0-9]+([-]?\w+)+[@]\w+[.]\w{2,3}$/;
    if (email.match(emailRE)) {
        return true;
    } else {
        alert("Email is incorrect!");
        return false;
    }
}
console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));


// 7. 
function checkLogin(login) {
    let loginRE = /^[A-Za-z]{1}[A-Za-z\d+(\.\d+)?]{1,9}$/;
    let number = /\d+(\.)?(\d?)/g;
    if (login.match(loginRE)) {
        console.log(`Login is correct and has numbers ${login.match(number)}`);
        return true;
    } else {
        console.log(`Login is incorrect and has numbers ${login.match(number)}`);
        return false;
    }
}
console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));