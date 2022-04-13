const toCachedFiles = [
  'index.html',
  'about.html',
  '/css/styles.css',
  '/js/main.js'
]

const cacheLabel = 'v1'

self.addEventListener('install', e => {
  console.log('Service worker installed')

  e.waitUntil(
    caches
      .open(cacheLabel)
      .then(cache => {
        console.log('Caching files')
        cache.addAll(toCachedFiles)
      })
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(cacheNames => cacheNames.map(name => {
        if (name !== cacheLabel) {
          console.log('deletando cache antigo!')
          return caches.delete(name)
        }
      })
    )
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
})