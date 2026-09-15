// все абзацы с классом text-block
const blocks = document.querySelectorAll(".text-block");
// индивидуальные кнопки
const toggleButtons = document.querySelectorAll(".toggle-btn");
// общая кнопка
const globalBtn = document.getElementById("globalBtn");

// обработчики для каждой индивидуальной кнопки
for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
        const index = toggleButtons[i].getAttribute("data-target");
        const block = blocks[index];

        // переключаем видимость
        if (block.style.display === "none") {
            block.style.display = "block";
            toggleButtons[i].textContent = "Скрыть";
        } else {
            block.style.display = "none";
            toggleButtons[i].textContent = "Показать";
        }

        updateGlobalButton();
    });
}

// обработчик общей кнопки
globalBtn.addEventListener("click", function () {
    // определяем: скрыто ли всё
    let allHidden = true;
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].style.display !== "none") {
            allHidden = false;
        }
    }

    // если всё скрыто — показываем всё, иначе — скрываем всё
    const newDisplay = allHidden ? "block" : "none";

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.display = newDisplay;
    }

    // текст индивидуальных кнопок тоже обновляем
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].textContent = allHidden ? "Скрыть" : "Показать";
    }

    updateGlobalButton();
});

// функция меняет текст общей кнопки в зависимости от состояния
function updateGlobalButton() {
    let allHidden = true;
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].style.display !== "none") {
            allHidden = false;
        }
    }
    globalBtn.textContent = allHidden ? "Показать всё" : "Скрыть всё";
}

// изначально всё видно
updateGlobalButton();