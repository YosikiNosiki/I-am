function showMessage() {
    alert("Спасибо за ваше сообщение!");
}

// Добавьте слушатель события для формы
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        showMessage();
        form.reset(); // Сброс формы после отправки
    });
});


