function validateForm(event) {
    event.preventDefault();
    var form = document.getElementById("registrationForm");

    // Отримуємо значення полів форми
    var login = document.getElementById("login").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var date = document.getElementById("date").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Виконуємо валідацію
    if (!login || !name || !surname || !date || !password || !confirmPassword) {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
        return;
    }

    // Перевірка формату дати (DD.MM.YYYY)
    var dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(date)) {
        alert("Невірний формат дати. Використовуйте формат DD.MM.YYYY.");
        return;
    }

    // Перевірка паролів на співпадіння
    if (password !== confirmPassword) {
        alert("Паролі не співпадають.");
        return;
    }

    alert("Форма відправлена успішно!");
}