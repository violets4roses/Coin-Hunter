const cacheName = "coin-hunter-v1";
const filesToCache = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./icon.svg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});