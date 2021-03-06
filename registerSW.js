/*
Register the service worker by passing in the file sw.js which contains 
the service worker.  
*/

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      //   btnAdd2.addEventListener("click", (e) => {
      //   btnAdd2.style.display = "none";
      //   registration.update(); 
      // });
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }