const box = document.getElementById("stateBox");
const btn = document.getElementById("stateBtn");

// возможные состояния: классы + подпись для кнопки
const states = [
    { classes: "box",                   label: "Стандарт" },
    { classes: "box large red",         label: "Большой красный" },
    { classes: "box small blue",        label: "Маленький синий" },
    { classes: "box medium green",      label: "Средний зелёный" }
];

let current = 0;

btn.addEventListener("click", function () {
    // переходим к следующему состоянию
    current = current + 1;
    if (current >= states.length) {
        current = 0;
    }

    box.className = states[current].classes;
    btn.textContent = states[current].label;
});