// 1. 
// let openTab = window.open("", "", "width=300, height=300");

// setTimeout(function(){
//     openTab.resizeTo(500,500);
// },2000);

// setTimeout(function(){
//     openTab.moveTo(200, 200);
// },4000);

// setTimeout(function(){
//     openTab.close();
// },6000);


// 2. 
function changeCSS() {
    document.getElementById("text").style.color = "orange";
    document.getElementById("text").style.fontSize = "20px";
    document.getElementById("text").style.fontFamily = "Comic Sans MS";
}


// 3. 
function makeColorBlue(color) {
    document.body.style.background = color;
}


// 4. 
function deleteElementFromList() {
    let x = document.getElementById("name_id");
    x.remove(x.selectedIndex);
}


// 5. 
let x = document.getElementById("liveBtn");
x.addEventListener("click", mouseClick);
x.addEventListener("mouseover", mouseOver);
x.addEventListener("mouseout", mouseOut);

function mouseClick() {
    document.getElementById("liveText").innerHTML += "I was pressed!<br>";
}
function mouseOver() {
    document.getElementById("liveText").innerHTML += "Mouse on me!<br>";
}
function mouseOut() {
    document.getElementById("liveText").innerHTML += "Mouse is not on me!<br>";
}


// 6. 
const height = document.querySelector('#height');
const width = document.querySelector('#width');

function watchSizeChanges() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}

window.onresize = watchSizeChanges;
window.addEventListener('resize', watchSizeChanges);

// 7. 
let citiesByCountry = {
    ger: ["Berlin", "Hamburg", "Munich ", "Stuttgart", "Essen", "Dresden"],
    usa: ["New York", "Chicago", "Austin", "Denver", "Chicago"],
    ukr: ["Kyiv", "Kharkyv", "Odesa", "Ternopil", "Lviv"]
};

function onCountryChanged() {
    document.getElementById("cities").innerHTML = "";
    let country = document.getElementById("country").value;
    let cities = citiesByCountry[country];
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.innerText = cities[i];
        document.getElementById("cities").append(option);
        onCityChanged()
    }
}
onCountryChanged();

function onCityChanged() {
    let countryFromList = document.getElementById("country");
    let country = countryFromList.options[countryFromList.selectedIndex].text;
    let city = document.getElementById("cities").value;
    document.getElementById("selectedCity").innerText = country + ": " + city;
};