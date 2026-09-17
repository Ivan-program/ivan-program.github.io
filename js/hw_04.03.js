// =========================================
// WEB.HW.04.03 — Игра «Виселица»
// =========================================

// 1. массив слов для игры
const words = ["ЗАЧЕТ"];

// 2. основной игровой объект
const game = {
    word: "",         // текущее слово-ответ
    letters: [],      // буквы слова
    blocks: [],       // ячейки на странице
    remaining: 0      // сколько букв осталось разгадать
};

// 3. элементы страницы
const scoreEl = document.querySelector(".score");
const puzzleEl = document.querySelector(".puzzle");
const lettersEl = document.querySelector(".letters");
const startBtn = document.querySelector(".startBtn");

// 4. запуск игры по кнопке
startBtn.addEventListener("click", startGame);

// ===== функция создания элемента =====
// 7. принимает: тип тега, родителя, текст, класс
function elMaker(type, parent, text, className) {
    const el = document.createElement(type);
    el.className = className;
    el.textContent = text;
    parent.appendChild(el);
    return el;
}

// ===== старт игры =====
function startGame() {
    // 5. если слова ещё остались — прячем кнопку, чистим игру
    if (words.length === 0) {
        return;
    }

    startBtn.style.display = "none";
    puzzleEl.innerHTML = "";
    lettersEl.innerHTML = "";
    scoreEl.textContent = "";
    game.remaining = 0;

    // берём слово из массива (shift забирает первый элемент)
    game.word = words.shift();

    // 6. разбиваем слово на буквы
    game.letters = game.word.split("");

    // 8. строим игровое поле
    builder();
}

// ===== построение игрового поля =====
function builder() {
    // 9. чистим игровые массивы
    puzzleEl.innerHTML = "";
    lettersEl.innerHTML = "";
    game.blocks = [];

    // 10. для каждой буквы создаём ячейку с прочерком
    game.letters.forEach(function (letter) {
        const box = elMaker("div", puzzleEl, "-", "box");

        // 11. если буква не пробел — увеличиваем счётчик
        if (letter === " ") {
            box.textContent = "";
            box.style.borderColor = "white";
        } else {
            game.remaining = game.remaining + 1;
        }

        // добавляем ячейку в игровой массив
        game.blocks.push(box);
    });

    // 12. обновляем результат
    updateScore();

    // 13. цикл по 33 буквам русского алфавита
    //    А = 1040 … Я = 1071 (код буквы)
    for (let i = 1040; i <= 1071; i++) {
        const letter = String.fromCharCode(i);
        const letterBox = elMaker("div", lettersEl, letter, "boxE");

        // 14. слушатель на каждой букве
        letterBox.addEventListener("click", function () {
            checker(letterBox, letter);
        });
    }
}

// ===== клик по букве =====
function checker(letterBox, letter) {
    // 15. убираем boxE, добавляем used, отключаем клик, меняем фон
    letterBox.className = "used";
    letterBox.style.backgroundColor = "darkgray";
    letterBox.style.color = "white";
    letterBox.style.cursor = "default";
    letterBox.replaceWith(letterBox.cloneNode(true)); // снимаем обработчики

    // передаём букву дальше
    checkLetter(letter);
}

// ===== проверка буквы в слове =====
function checkLetter(letter) {
    // 16. перебираем буквы слова
    for (let i = 0; i < game.letters.length; i++) {
        // сравниваем в верхнем регистре
        if (game.letters[i] === letter.toUpperCase()) {
            // открываем ячейку
            game.blocks[i].textContent = game.letters[i];

            // уменьшаем счётчик оставшихся
            game.remaining = game.remaining - 1;
        }
    }

    // 17. обновляем счёт и проверяем конец игры
    updateScore();
}

// ===== счёт и конец игры =====
function updateScore() {
    scoreEl.textContent = "Осталось букв: " + game.remaining;

    if (game.remaining <= 0) {
        scoreEl.textContent = "Победа! Слово: " + game.word;

        // снова показываем кнопку — можно играть дальше
        startBtn.style.display = "inline-block";
    }
}