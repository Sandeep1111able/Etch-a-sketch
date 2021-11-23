const container = document.querySelector(".container");
const userButton = document.querySelector('#user-input');
const eraseButton = document.querySelector('#erase');


userButton.addEventListener('click', () => {
    let number = +prompt("Enter number between 1-99");
    if (number > 99) {
        number = +prompt("Your number is greater than 99. Please enter between 1 and 99");
    }
    if (isNaN(number) === false) {
        makeGrid(number);
        erase();
        colorChanger();
        console.log(number);

    } else {
        alert('That is not a number');
    }
});

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    let splittedLetters = letters.split("");


    for (i = 0; i < 6; i++) {

        color += `${splittedLetters[Math.floor(Math.random()*16)]}`;

    }
    return color;
}

function makeGrid(column) {
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${column}, 1fr)`;
    console.log(column);
    for (i = 0; i < column * column; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }


}

function colorChanger() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = randomColor();
        });
    });
}

function erase() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

eraseButton.addEventListener('click', erase);


makeGrid(16);
colorChanger();