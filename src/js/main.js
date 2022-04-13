if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cache_fetch.js')
      .then(res => console.log('service worker registered'))
      .catch(console.log)
  }) 
}