// #1

let count = 4;
let ask = prompt('Введіть пароль!');
if (ask === '1111') {
    alert(`Запрошуємо на сайт!`)
}
else {
    while (count != 0) {
    ask = prompt(`Залишилось ${count} спроби`)
    count -= 1;
    }
    if (count == 0) {
        alert(`Будь ласка, спробуйте пізніше!`)
    }
}


