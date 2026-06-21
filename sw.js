'use strict';

const CACHE = 'prepassist-v1';

const PRECACHE = [
  './',
  'index.html',
  'styles/main.css',
  'scripts/common.js',
  'scripts/engine.js',
  'scripts/study-data.js',
  'icons/icon.svg',
  'manifest.json',
  'ai-102/index.html',
  'servicenow-cis-df/index.html',
  'servicenow-csa/index.html',
];

/* Install — cache core shell */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* Activate — delete old caches */
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Fetch — cache-first for assets, network-first for HTML */
self.addEventListener('fetch', function (e) {
  const url = new URL(e.request.url);

  /* Only handle same-origin requests */
  if (url.origin !== location.origin) return;

  /* HTML: network-first so updates are seen immediately */
  if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(e.request).then(function (resp) {
        const clone = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
        return resp;
      }).catch(function () {
        return caches.match(e.request);
      })
    );
    return;
  }

  /* Assets (CSS/JS/images): cache-first */
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (resp) {
        const clone = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
        return resp;
      });
    })
  );
});
