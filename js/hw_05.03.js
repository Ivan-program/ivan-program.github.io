// =========================================
// WEB.HW.05.03 — Отслеживание позиции мыши
// =========================================

// 1. главный контейнер и элемент вывода
const area = document.querySelector(".track-area");
const output = document.querySelector(".coords-output");

// 2. слушатель событий на контейнере
area.addEventListener("mouseover", function () {
    // 3. при наведении — добавляем класс active
    area.classList.add("active");
});

area.addEventListener("mouseout", function () {
    // 3. при уходе — убираем класс active
    area.classList.remove("active");
});

area.addEventListener("mousemove", function (event) {
    // 4. получаем координаты курсора внутри элемента
    const x = event.clientX;
    const y = event.clientY;

    // формируем удобочитаемое предложение и выводим
    output.textContent = "Позиция курсора: X = " + x + ", Y = " + y;
});