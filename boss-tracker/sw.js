const CACHE_NAME = 'secplus-boss-tracker-v6';
const ASSETS = [
  './index.html', './game.html', './schedule.html', './socvisualizer.html', './stats.html', './traps.html',
  './shared/base.css', './shared/config.js',
  './manifest.json', './icons/icon-192.png', './icons/icon-512.png',
  './data/question_bank.json', './data/week1_sprint.md', './data/schedule.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
