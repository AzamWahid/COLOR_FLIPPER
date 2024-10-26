// first approch

// function getRandomHexColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${randomColor.padStart(6, '0')}`; // Ensures the color is always 6 digits
// }

// // Usage
// const randomColor = getRandomHexColor();
// console.log(randomColor);

// function changeColor() {
//     document.getElementsByClassName('colorText')[0].innerHTML = getRandomHexColor();
//     document.body.style.backgroundColor = getRandomHexColor();

// }

//second manual approch

let colors = [`#F1f5f8`,`#fcdd99`,`#a3ffd5`,`#ff89a`,`#f2a4e0`,`#cff9a4`,`#f7a8f0`,`#ebffaf`,`#fcf8b3`,`#80f2b5`]

document.getElementsByClassName('colorText')[0].innerHTML = colors[0];
document.body.style.backgroundColor = colors[0];

function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName('colorText')[0].innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
}
