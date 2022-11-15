// 1. 
function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(message);
        },delay)
    })
}
getPromise("test promise", 2000).then(function(data) { 
    console.log(data);	 
}); 
 
// 2. 
function calcArrProduct(arr) {
    let result = 1;
    let isNumber;
    let error = 'Error! Incorrect array!';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result *= arr[i];
            isNumber = true;
        } else {
            isNumber = false;
            break;
        }
    }
    return new Promise((resolve) => {
        isNumber ? resolve (result): console.log(error);
    })
}

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         let result = 1;
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] === 'number') {
//                 result *= arr[i];
//             } else {
//                 reject('Error! Incorrect array!');
//             }
//         }
//         resolve(result);
//     });
// }

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60 
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!" 

 
// 3. 
const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time)); 

// function showNumbers() { 
//     Promise.resolve(delay(10, 2000));
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// } 

function showNumbers() {
    for (let i = 0, p = Promise.resolve(0); i <= 10; i++) {
        const time = Math.floor(Math.random() * 3) * 1000;
        p = p.then(() =>
            delay(i, time).then((result) => {
                console.log(`result = ${result}, delay = ${time / 1000}sec`);
            })
        );
    }
}
showNumbers(); 

// 4. 
async function showNumbers1(number) {
    for (let i = 0; i <= number; i++) {
        await delay(i, Math.random() * 2000);
        console.log(i);
    }
}
showNumbers1(10);