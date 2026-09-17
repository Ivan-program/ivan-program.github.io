// =========================================
// WEB.HW.05.02 — Звёздный рейтинг
// =========================================

// 1. контейнер списка и блок вывода
const starsContainer = document.querySelector(".stars");
const output = document.querySelector(".output");

// 2. все звёзды
const stars = document.querySelectorAll(".star");

// 3. перебираем звёзды, задаём каждой номер и слушатель
for (let i = 0; i < stars.length; i++) {
    // номер звезды = индекс + 1
    stars[i].value = i + 1;

    // 4. слушатель клика вызывает starRate
    stars[i].addEventListener("click", starRate);
}

// =========================================
// функция обработки клика по звезде
// =========================================
function starRate(event) {
    // 4. берём номер звезды из target
    const starValue = event.target.value;

    // 5. выводим оценку
    output.textContent = "Ваша оценка: " + starValue + " из " + stars.length;

    // 6. перебираем все звёзды и красим в оранжевый
    //    те, чей индекс меньше starValue
    stars.forEach(function (star, index) {
        if (index < starValue) {
            star.classList.add("orange");
        } else {
            star.classList.remove("orange");
        }
    });
}