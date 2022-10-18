// Practical task 

// 1. 
document.getElementById("test").innerText = "Last";
document.body.children[0].innerHTML = "Last";


// 2. 
alert(document.getElementsByClassName("image").src = "cat.jpeg");


// 3.  
const divList = document.querySelectorAll("div > p");
for (let i = 0; i < divList.length; i++) {
    console.log(`Selector text ${i}: ${divList[i].innerHTML}`);
}


// 4. 
alert(document.querySelector("#list").children[0].innerText);
alert(document.querySelector("#list").children[4].innerText);
alert(document.querySelector("#list").children[1].innerText);
alert(document.querySelector("#list").children[3].innerText);
alert(document.querySelector("#list").children[2].innerText);

// alert(document.getElementById("list").children[0].innerHTML); 
// alert(document.getElementById("list").children[4].innerHTML);
// alert(document.getElementById("list").children[1].innerHTML);
// alert(document.getElementById("list").children[3].innerHTML);
// alert(document.getElementById("list").children[2].innerHTML);


// 5.  
document.querySelector("h1").style.backgroundColor = "#90EE90";
document.getElementById("myDiv").children[0].style.fontWeight = "bold";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
document.querySelector("span").style.visibility = "hidden";

let newText = document.getElementById("myList").children[0].innerText + document.getElementById("myList").children[1].innerText + document.getElementById("myList").children[2].innerText;
document.getElementById("myList").innerHTML = newText;


// 6. 
let textInput1 = prompt("Please enter your name");
let textInput2 = prompt("Please enter your surname!");
document.getElementById("input1").value = textInput1;
document.getElementById("input2").value = textInput2;

function shuffleValues() {
    document.getElementById("input1").value = textInput2;
    document.getElementById("input2").value = textInput1;
}


// 7. 
let newMain = document.createElement("main");
newMain.className = "mainClass check item";
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
newMain.appendChild(newDiv);
newDiv.insertAdjacentHTML('afterend', '<p>First paragraph</p>');
console.log(newMain);
