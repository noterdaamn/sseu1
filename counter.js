window.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const targetCount = 32; // Целевое число, до которого должен дойти счетчик
    const animationDuration = 200000; // Продолжительность анимации в миллисекундах

    let count = 0;
    const step = targetCount / (animationDuration / 1000); // Вычисляем количество единиц на каждом шаге анимации

    const updateCount = () => {
        count += step;
        counter.textContent = Math.ceil(count); // Округляем значение до целого числа
        if (count < targetCount) {
            requestAnimationFrame(updateCount); // Запрашиваем следующий кадр анимации
        }
    };

    updateCount(); // Запускаем анимацию при загрузке страницы
});