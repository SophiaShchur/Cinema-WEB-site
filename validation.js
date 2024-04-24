document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну подію подачі форми

    // Отримуємо значення полів форми
    var login = document.getElementsByName("login")[0].value;
    var name = document.getElementsByName("name")[0].value;
    var surname = document.getElementsByName("surname")[0].value;
    var date = document.getElementsByName("date")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var confirmPassword = document.getElementsByName("confirmPassword")[0].value;

    // Виконуємо валідацію
    if (!login || !name || !surname || !date || !password || !confirmPassword) {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
        return;
    }

    // Перевірка паролів на співпадіння
    if (password !== confirmPassword) {
        alert("Паролі не співпадають.");
        return;
    }

    // Перевірка формату дати (DD.MM.YYYY)
    var dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    if (!dateRegex.test(date)) {
        alert("Невірний формат дати. Використовуйте формат DD.MM.YYYY.");
        return;
    }

    // Розділити дату на складові (день, місяць, рік)
    var parts = date.split(".");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Перевірка на коректність дати
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Некоректна дата.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Некоректний місяць.");
        return;
    }

    var maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) {
        alert("Некоректний день.");
        return;
    }

    // Все в порядку, можна відправити форму
    alert("Форма відправлена успішно!");
    // Тут можна відправити дані форми на сервер або виконати інші необхідні дії
});