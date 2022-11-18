const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


const square = document.querySelector('.square');
document.addEventListener('keydown', move);
let x = 0;
let y = 0;

function move(event) {
    if (event.keyCode === DOWN) {
        y += 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    } else if (event.keyCode === UP) {
        y -= 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    } else if (event.keyCode === LEFT) {
        x -= 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    } else if (event.keyCode === RIGHT) {
        x += 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    }
}