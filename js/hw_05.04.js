// =========================================
// WEB.HW.05.04 — Игра на скорость
// =========================================

// 1. главные элементы страницы
const output = document.querySelector(".game-output");
const message = document.querySelector(".game-message");

// 4. глобальный объект игры
const game = {
    start: null
};

// 2. создаём квадрат для клика внутри поля
const box = document.createElement("div");
box.classList.add("game-box");
output.appendChild(box);

// 3. инструкция игроку
message.textContent = "Нажмите на красный квадрат, чтобы начать";

// 5. функция случайного числа от 0 до max
function randNum(max) {
    return Math.floor(Math.random() * max);
}

// =========================================
// обработчик клика по квадрату
// =========================================
box.addEventListener("click", function () {
    // сначала прячем квадрат
    box.style.display = "none";

    // если игра уже началась — считаем результат
    if (game.start !== null) {
        const now = new Date().getTime();
        const diff = (now - game.start) / 1000;
        message.textContent = "Ваш результат: " + diff.toFixed(3) + " сек";
    } else {
        message.textContent = "Игра началась! Ждите красный квадрат...";
    }

    // 6. с задержкой показываем новый квадрат
    //    задержка 1–3 секунды
    const delay = 1000 + randNum(2000);
    setTimeout(addBox, delay);
});

// =========================================
// функция добавления нового квадрата
// =========================================
function addBox() {
    // 7. обновляем текст-подсказку
    message.textContent = "Кликните по красному квадрату!";

    // 8. запоминаем время появления квадрата
    game.start = new Date().getTime();

    // ширина игрового поля и квадрата
    const fieldW = output.clientWidth;
    const fieldH = output.clientHeight;
    const boxW = 50;
    const boxH = 50;

    // 9. случайная позиция квадрата внутри поля
    const leftPos = randNum(fieldW - boxW);
    const topPos = randNum(fieldH - boxH);

    box.style.left = leftPos + "px";
    box.style.top = topPos + "px";
    box.style.display = "block";
}