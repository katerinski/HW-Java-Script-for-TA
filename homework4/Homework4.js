// 1.
function calcRectangleArea(width, height) {

    if (isNaN(width) || isNaN(height)) {
        throw new Error(`${width} or ${height} are not numbers`);
    }
    return width * height;
};

try {
    calcRectangleArea('a', 4)
} catch (error) {
    console.log(error.message);
};

// 2. 
function checkAge() {
    let age = prompt("Please enter your age?");

    try {
        if (age == '') {
            alert("The field is empty! Please enter your age");
            throw new Error("User submitted with empty field");
        } else if (isNaN(age)) {
            alert(`${age} should be a number! Please enter your age`);
            throw new Error(`User didn't enter a number value`);
        } else if (age < 14) {
            alert("You don't have permision to watch video");
            throw new Error("User entered number value less then 14");
        } else {
            alert("Now you can watch the video!");
        }
    } catch (error) {

        console.log(error.name);
        console.log(error.message);
    }
};

checkAge();
 
// 3. 
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
};

function showMonthName(month) {
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < year.length; i++) {
        if (month <= year.length && month == (i + 1)) {
            return year[i];
        } else {
            throw new MonthException("Incorrect month number");
        }
    }
};

try {
    console.log(showMonthName(14));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// 4. 
function showUser(id) {
    try {
        if (id < 0) {
            throw new Error(`ID must not be negative: ${id}`);
        }
        let user = {
            ID: id,
        };
        return user;
    } catch (error) {
        return error;
    }
};

function showUsers(ids) {
    let newArr = [];
    for (let i = 0; i < ids.length; i++) {
        newArr.push(showUser(ids[i]));
    }
    return newArr;
};

console.log(showUser(5));
console.log(showUsers([7, -12, 44, 22]));