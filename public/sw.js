const STATIC_CACHE_NAME = "cache-static-v0";
const DYNAMIC_CACHE_NAME = "cache-dynamic-v0";

const STATIC_FILES = [
		self.location.origin + "/",
		self.location.origin + "/main.css",
		self.location.origin + "/icon.png",
		self.location.origin + "/projects/luckydraw/1.png",
		self.location.origin + "/projects/luckydraw/2.png",
		self.location.origin + "/projects/luckydraw/3.png",
		self.location.origin + "/projects/luckydraw/4.gif",
		self.location.origin + "/projects/luckydraw/5.png",
		self.location.origin + "/projects/luckydraw/6.gif",
		self.location.origin + "/projects/luckydraw/7.gif",
		self.location.origin + "/projects/luckydraw-iframe/1.png",
		self.location.origin + "/projects/luckydraw-iframe/2.gif",
		self.location.origin + "/projects/buyer-mission/1.gif",
		self.location.origin + "/projects/buyer-mission/2.png",
		self.location.origin + "/projects/gumrindelwald/1.gif",
		self.location.origin + "/projects/folklorevermore-chess/1.gif",
		"https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PszQMgseyXF_Gl.woff2"
];

const STATIC_FILES_FORMAT = /\.(jpe?g|png|gif|mp4|svg|webp)/i;

self.addEventListener("install", (e) => {
		// Wait the event install until the callback inside is resolved
		e.waitUntil(
				caches.open(STATIC_CACHE_NAME).then((cache) => {
						console.log("Cache installed. ", cache);

						cache.addAll(STATIC_FILES);
				})
		);
});

self.addEventListener("activate", (e) => {
		e.waitUntil(
				caches.keys().then(keys => {
						return Promise.all(
								keys
										.filter(key => key !== STATIC_CACHE_NAME)
										.map(key => caches.delete(key))
						);
				})
		);
});

self.addEventListener("fetch", (e) => {
		console.log({req: e.request.url});
		e.respondWith(
				caches.match(e.request).then(cache => {
								return cache ||
										fetch(e.request).then(fetchRes => {
												const clonedResponse = fetchRes.clone();
												const isImageFile = STATIC_FILES_FORMAT.test(e.request.url);


												if (isImageFile) {
														caches.open(DYNAMIC_CACHE_NAME).then(c => {
																// We cannot store the fetchResponse to the cache and return it to the client. It needs to be cloned.
																c.put(e.request.url, clonedResponse);
														});
												}

												return fetchRes;

										});
						}
				)
		);
});
