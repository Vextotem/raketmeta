self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches.open('raket-tv-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                'https://cdn.jsdelivr.net/gh/Vextotem/raketmeta@main/raket.pngDujwJPpedmh8xn60mzWylwMWOJCgt6F8cSRCY8q_NmReJ82HhA2o71eEsvSeTgr0l5dUXMBdp7LzREE5fb3nId_7Pu_3WfQ/s320/IMG_20240818_121729_464.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
