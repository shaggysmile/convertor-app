if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/convertor-app/sw.js', { scope: '/convertor-app/' })})}