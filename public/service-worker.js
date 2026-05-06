// Service Worker - Auto-unregister
// Este service worker se desregistra a sí mismo para limpiar registros antiguos

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister()
      .then(() => {
        return self.clients.matchAll();
      })
      .then((clients) => {
        clients.forEach(client => client.navigate(client.url));
      })
  );
});
