// три фразы, которые циклически меняются
const phrases = ["Доброе утро!", "Добрый день!", "Добрый вечер!"];

let index = 0;
let clicks = 0;

const header = document.getElementById("greetingHeader");
const btn = document.getElementById("greetingBtn");

btn.addEventListener("click", function () {
    clicks = clicks + 1;
    index = index + 1;

    // если вышли за пределы массива — начинаем сначала
    if (index >= phrases.length) {
        index = 0;
    }

    header.textContent = phrases[index];
    btn.textContent = "Кликов: " + clicks;
});