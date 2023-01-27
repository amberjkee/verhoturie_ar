self.addEventListener('install', event => {
    function onInstall() {
        return caches.open('static')
            .then(cache => cache.addAll([
                'index.html',
                'sw.js',
                'videos/1.mp4',
                'videos/2.mp4',
                'videos/3.mp4',
                'videos/4.mp4',
				'videos/5.mp4',
				'videos/6.mp4',
				'videos/7.mp4',
				'videos/8.mp4',
				'patterns/pattern-1.patt',
				'patterns/pattern-2.patt',
				'patterns/pattern-3.patt',
				'patterns/pattern-4.patt',
				'patterns/pattern-5.patt',
				'patterns/pattern-6.patt',
				'patterns/pattern-7.patt',
				'patterns/pattern-8.patt',
        );
    }

    event.waitUntil(onInstall(event));
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});
