// палитра из 8 цветов
const palette = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown"
];

const squares = document.querySelectorAll(".square");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");

// случайный цвет из палитры
function getRandomColor() {
    const randomColor = palette[Math.floor(Math.random() * palette.length)];
    return randomColor;
}

// покрасить все квадраты
randomBtn.addEventListener("click", function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = getRandomColor();
    }
});

// сбросить все квадраты в белый
resetBtn.addEventListener("click", function () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
});