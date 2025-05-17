self.addEventListener("install", ...); // �������� �����
self.addEventListener("activate", ...); // ������� ������ ����
self.addEventListener("fetch", ...); // ����������� ������� �� ���� ��� ���������

const CACHE_NAME = "card-v1"; // �������� ���� (����� ������ ��� �����������)

const FILES = [ // �����, ������� ����� ��������� � ��� ��� ���������
    "/",
    "/index.html",
    "/styles.css",
    "/app.js",
    "/manifest.json",
    "/offline.html",
    "/images/photo.jpg",
    "/images/qrcode-telegram.png",
    "/images/qrcode-email.png",
    "/images/qrcode-github.png",
    "/icons/icon-192.png",
    "/icons/icon-512.png"
];

// ��������� ������-�������
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(c => c.addAll(FILES))
    );
    self.skipWaiting(); // ����� ������������ ����� ������
});

// ��������� (������� ������� ����)
self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))
        )
    );
    self.clients.claim();
});

// ��������� �������� �� ��������
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request) // �������� ����� ���� � ����
            .then(r => r || fetch(e.request)) // ���� ��� � ������� ��������� �� ���������
            .catch(() => caches.match("/offline.html")) // ���� ������ �� ������� � �������� offline.html
    );
}); 
