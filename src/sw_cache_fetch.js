const cacheLabel = 'v2'

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(cacheNames => cacheNames.map(name => {
        if (name !== cacheLabel) {
          console.log('deleting old cache')
          return caches.delete(name)
        }
      })
    )
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone()

        caches
          .open(cacheLabel)
          .then(cache => {
            if (!/^https?:$/i.test(new URL(e.request.url).protocol)) return;
            
            cache.put(e.request, resClone)
          })
        
        return res
      })
      .catch(err =>
          caches
            .match(e.request)
            .then(res => res)
        )
  )
})