if ('serviceWorker' in navigator) { // Проверяем поддержку браузером
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js'); // Регистрируем воркер
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const qrImage = document.getElementById('qrImage');

    const qrCodes = {
        btnEmail: 'images/qrcode-email.png',
        btnTelegram: 'images/qrcode-telegram.png',
        btnGitHub: 'images/qrcode-github.png'
    };

    Object.keys(qrCodes).forEach(buttonId => {
        const btn = document.getElementById(buttonId);
        btn.addEventListener('click', () => {
            qrImage.src = qrCodes[buttonId];
            qrImage.style.display = 'inline-block';
        });
    });
});

