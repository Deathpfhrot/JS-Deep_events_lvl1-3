// JS Vertiefung Übung lev1_4: Events addEventListener


const element = document.getElementById('eventParagraph');
element.addEventListener('click', () => {
    console.log("Du hast auf den Event-Paragrpahen geklickt.");
})

// JS Vertiefung Übung levl1_5: Events counter getElementById

// Function

let clickMe = document.getElementById('clickMe')

var counterVal = 0;

clickMe.addEventListener('click', () => {
    console.log(counterVal);
    clickMe.innerHTML = `Click me: ${++counterVal}`
})

// JS Vertiefung Übung lev1_6: Events addEventListerner("change")

let mySelect = document.getElementById('my-select')
let optionSelected = document.getElementById('option-selected')

console.log(mySelect.value);

mySelect.addEventListener("change", e => {
    optionSelected.innerHTML = `Sie haben ausgewählt ${mySelect.value}`
})

// JS Vertiefung Übung lev2_1: Farben Umschalter

let umschalter = document.getElementById('umschalter')
let txtColor1 = document.getElementById('txtColor1')
let txtColor2 = document.getElementById('txtColor2')

function themeChange() {
    document.body.style.backgroundColor = 'gray';
    txtColor1.style.color = 'black';
    txtColor2.style.color = 'black';
}

function themeChange2() {
    document.body.style.backgroundColor = 'white';
    txtColor1.style.color = 'black';
    txtColor2.style.color = 'black';
}

function themeChange3() {
    document.body.style.backgroundColor = 'blue';
    txtColor1.style.color = 'white';
    txtColor2.style.color = 'white';
}

function themeChange4() {
    document.body.style.backgroundColor = 'yellow';
    txtColor1.style.color = 'black';
    txtColor2.style.color = 'black';
}

// JS Vertiefung lev2_2: KeyCodeInfo

let numberPressed = document.getElementById('numberPressed')
let key = document.getElementById('key')
let keyCode = document.getElementById('keyCode')
let code = document.getElementById('code')

window.addEventListener("keypress", (e) => {
    var x = e.code
    var y = e.keyCode
    var z = e.key
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.key);
    code.innerHTML = x
    keyCode.innerHTML = y
    numberPressed.innerHTML = y
    key.innerHTML = z
})

// JS Vertiefung lev3_1: Dynamische Website

let demo = document.getElementById('demo')
let rot = document.getElementById('rot')
let grun = document.getElementById('grun')
let blau = document.getElementById('blau')
let clickCounter = 0
let sumColor = "rgb(" + rot.value + ", " + grun.value + ", " + blau.value + ")"
let myHex = `${rot.value, grun.value, blau.value}`

function changeBackground(a, b, c) {
    console.log(a, b, c);
    document.body.style.backgroundColor = a;
    document.body.style.backgroundColor = b;
    document.body.style.backgroundColor = c;
    demo.innerHTML = `Die Farbe wurde ${++clickCounter} mal geändert!`
}

demo.addEventListener("change", changeHandle);

function changeHandle() {
    let sumColor = "rgb(" + rot.value + ", " + grun.value + ", " + blau.value + ")"



    demo.innerHTML = sumColor + " = " + rgbToHex(rot.value) + rgbToHex(grun.value) + rgbToHex(blau.value);
    document.body.style.backgroundColor = sumColor;
}


let rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};