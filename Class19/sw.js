// var cacheName = 'pwa-practice'
// var cacheName = 'pwa-practice1'
// var cacheName = 'pwa-practice2'
// var cacheName = 'pwa-practice3'
var cacheName = "pwa-practice4";

var filesToCashe = ["/", "/ex.html", "/ex.js", "/logo-og.png"];
// onclick jese event lagye ga
self.addEventListener("install", function(e) {
  console.log("install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCashe);
    })
  );
});

// cahe ka naeme ok change karna hoga agr insatll k baad k koi chz add krne ho toh
self.addEventListener("activate", function(e) {
  console.log("active");
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(e) {
    console.log(e.request.url)
  e.respondWith(
            caches.match(e.request)
            .then(response =>{
                request response || fetch(e.request)
            })
  );
});
