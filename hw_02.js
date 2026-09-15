// =========================================
// WEB.HW.02.01 — сумма всех элементов массивов
// =========================================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

function sumOfAllArrays(arr1, arr2, arr3) {
    // объединяем три массива в один
    const combo = [...arr1, ...arr2, ...arr3];
    let sum = 0;
    for (let i = 0; i < combo.length; i++) {
        sum += combo[i];
    }
    return sum;
}

const res1 = sumOfAllArrays(arr1, arr2, arr3);
console.log("WEB.HW.02.01 — сумма:", res1);


// =========================================
// WEB.HW.02.02 — сумма простых чисел
// =========================================
const nums1 = [2, 3, 4, 5, 6];
const nums2 = [7, 8, 9, 10, 11];
const nums3 = [12, 13, 14, 15, 16];

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimesInArrays(arr1, arr2, arr3) {
    const allNumbers = [...arr1, ...arr2, ...arr3];
    let sum = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        if (isPrime(allNumbers[i])) {
            sum += allNumbers[i];
        }
    }
    return sum;
}

const res2 = sumOfPrimesInArrays(nums1, nums2, nums3);
console.log("WEB.HW.02.02 — сумма простых:", res2);


// =========================================
// WEB.HW.02.03 — общие свойства объектов
// =========================================
let shop1 = {
    title: "DeNiS shop",
    spec: "electronics",
    city: "Yaroslavl",
    contacts: {
        phone: "8-800-555-35-35",
        email: "smth@mail.com"
    }
};

let shop2 = {
    title: "CTUJIb",
    spec: "clothes",
    city: "Moscow",
    contacts: {
        phone: "8-800-255-25-25",
        email: "info@mail.com"
    }
};

let shop3 = {
    title: "BKYC_NE_O4EHb",
    spec: "food",
    city: "VladivAssTok",
    contacts: {
        phone: "8-800-655-35-35",
        email: "hello@mail.com"
    }
};

function formatValue(value) {
    if (Array.isArray(value)) {
        return value.join(", ");
    }
    if (typeof value === "object" && value !== null) {
        let parts = [];
        for (let key in value) {
            parts.push(key + ": " + value[key]);
        }
        return parts.join(", ");
    }
    return value;
}

function commonProps(...objs) {
    if (objs.length === 0) {
        return;
    }

    for (let key in objs[0]) {
        let inAll = true;
        for (let i = 1; i < objs.length; i++) {
            if (!(key in objs[i])) {
                inAll = false;
                break;
            }
        }

        if (inAll) {
            let values = [];
            for (let i = 0; i < objs.length; i++) {
                values.push(formatValue(objs[i][key]));
            }
            console.log(key + ": " + values.join(", "));
        }
    }
}

console.log("WEB.HW.02.03 — общие свойства:");
commonProps(shop1, shop2, shop3);


// =========================================
// Вывод результатов на страницу
// =========================================
const r1 = document.getElementById("result1");
if (r1) {
    r1.textContent = "Сумма всех элементов: " + res1;
}

const r2 = document.getElementById("result2");
if (r2) {
    r2.textContent = "Сумма простых чисел: " + res2;
}

const r3 = document.getElementById("result3");
if (r3) {
    r3.textContent =
        "title: " + shop1.title + ", " + shop2.title + ", " + shop3.title + "\n" +
        "spec: " + shop1.spec + ", " + shop2.spec + ", " + shop3.spec + "\n" +
        "city: " + shop1.city + ", " + shop2.city + ", " + shop3.city + "\n" +
        "contacts: phone: " + shop1.contacts.phone + ", email: " + shop1.contacts.email +
        ", phone: " + shop2.contacts.phone + ", email: " + shop2.contacts.email +
        ", phone: " + shop3.contacts.phone + ", email: " + shop3.contacts.email;
}