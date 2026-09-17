// 1. список имён по умолчанию
let myArray = ["Иван", "Пётр", "Анна", "Мария"];

// параллельный массив — голоса каждого участника
let votes = [0, 0, 0, 0];

// 2. выбираем элементы страницы
const message = document.getElementById("message");
const input = document.getElementById("addFriend");
const addBtn = document.getElementById("addNew");
const table = document.getElementById("output");

// 4-5. основная функция — формирует таблицу из массивов
function buildTable() {
    // очищаем таблицу перед перерисовкой
    table.innerHTML = "";

    // 3. идём по массиву через forEach
    myArray.forEach(function (name, index) {
        // строка таблицы
        const tr = document.createElement("tr");

        // три ячейки
        const tdIndex = document.createElement("td");
        const tdName = document.createElement("td");
        const tdVotes = document.createElement("td");

        // содержимое: номер, имя, счётчик
        tdIndex.textContent = index + 1;
        tdName.textContent = name;
        tdVotes.textContent = votes[index];

        // добавляем ячейки в строку
        tr.appendChild(tdIndex);
        tr.appendChild(tdName);
        tr.appendChild(tdVotes);

        // добавляем строку в таблицу
        table.appendChild(tr);

        // 6. клик по строке — увеличить счётчик
        tr.addEventListener("click", function () {
            // 7. читаем текущее значение из последней ячейки и превращаем в число
            let count = Number(tdVotes.textContent);

            // 8. увеличиваем на 1 и обновляем ячейку
            count = count + 1;
            tdVotes.textContent = count;

            // синхронизируем значение с массивом,
            // чтобы оно не потерялось при перерисовке
            votes[index] = count;
        });
    });
}

// 3. клик по кнопке "Добавить друга"
addBtn.addEventListener("click", function () {
    const name = input.value.trim();

    // пустое имя не добавляем
    if (name === "") {
        return;
    }

    // добавляем имя в массив и голос 0 в параллельный массив
    myArray.push(name);
    votes.push(0);

    // очищаем поле ввода
    input.value = "";

    // перерисовываем таблицу
    buildTable();
});

// первая отрисовка таблицы при загрузке страницы
buildTable();