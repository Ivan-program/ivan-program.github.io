// 1. все заголовки
const titles = document.querySelectorAll(".title");
// 2. всё содержимое — количество совпадает с количеством заголовков
const texts = document.querySelectorAll(".myText");

// функция, которая закрывает все разделы
function hideAll() {
    for (let i = 0; i < texts.length; i++) {
        texts[i].classList.remove("active");
    }
}

// 3. вешаем обработчик на каждый заголовок
for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {
        // 5. сначала всё скрываем
        hideAll();

        // 4. потом переключаем активный класс у нужного блока
        // (берём следующий элемент после заголовка в DOM)
        texts[i].classList.add("active");
    });
}