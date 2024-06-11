// Создаем новый экземпляр Intersection Observer с колбэком для обработки изменения состояния видимости
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Если секция .section-red становится видимой, добавляем класс для отображения текста
        if (entry.isIntersecting) {
            entry.target.classList.add('show-text');
        } else {
            // Если секция .section-red не видима, удаляем класс
            entry.target.classList.remove('show-text');
        }
    });
});

// Находим секцию .section-red
const sectionRed = document.querySelector('.section-red');

// Начинаем наблюдение за секцией .section-red
observer.observe(sectionRed);

