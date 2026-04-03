const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resButton = document.getElementById("reset");

let count = 0;
number.textContent = count;

function increaseCount() {
 count++;
 number.textContent = count;
}

function decreaseCount() {
count--;
number.textContent = count;
}

function resetCount() {
count = 0;
number.textContent = count;
}

incButton.addEventListener("click",increaseCount);
decButton.addEventListener("click",decreaseCount);
resButton.addEventListener("click",resetCount);