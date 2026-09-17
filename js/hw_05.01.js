// =========================================
// WEB.HW.05.01 — Собственная аналитика
// =========================================

// 3. массив, куда складываем информацию о кликах
const trackArray = [];

// 4. основной контейнер
const container = document.querySelector(".track-container");

// 10. элемент для вывода журнала
const output = document.querySelector(".track-output");

// 5. слушатель кликов на контейнере
container.addEventListener("click", handleClick);

// 6. функция обработки клика
function handleClick(event) {
    // 7. получаем элемент, по которому щёлкнули
    const target = event.target;

    // проверяем, есть ли у элемента id —
    // это отсекает клики по самому контейнеру
    if (!target.id) {
        return;
    }

    // 8. объект со сведениями о клике
    const info = {
        textContent: target.textContent,
        id: target.id,
        tagName: target.tagName,
        className: target.className
    };

    // 9. добавляем объект в массив
    trackArray.push(info);

    // 10. выводим журнал
    showLog();
}

// функция формирует вывод на странице
function showLog() {
    let html = "";

    for (let i = 0; i < trackArray.length; i++) {
        const item = trackArray[i];

        html += "<p>";
        html += "<strong>Клик " + (i + 1) + ":</strong> ";
        html += "текст = " + item.textContent + ", ";
        html += "id = " + item.id + ", ";
        html += "тег = " + item.tagName + ", ";
        html += "класс = " + item.className;
        html += "</p>";
    }

    output.innerHTML = html;
}