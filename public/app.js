window.addEventListener('load' , () => {

let grid = 16;

const squareContainer = document.querySelector('.squareContainer');

for(let i = 1; i <= grid*grid; i++){
    let square = document.createElement('div');
    square.classList.toggle('square');

    squareContainer.appendChild(square);
}

const square = document.querySelectorAll('.square');

square[1].addEventListener('mouseover' , () => {
    console.log("object");
});

squareContainer.addEventListener('mouseover' , (e) => {
    e.target.style = "background-color: #333";
});
});