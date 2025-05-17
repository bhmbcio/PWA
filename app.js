if ('serviceWorker' in navigator) { // Проверяем поддержку браузером
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js'); // Регистрируем воркер
    });
}

