/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope

const STATIC_CACHE_NAME = "cache-static-v0";
const DYNAMIC_CACHE_NAME = "cache-dynamic-v0";

const jetBrainsMonoFontUrls = [
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PszQMgseyXF_Gl.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PsxAMgseyXF_Gl.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PswwMgseyXF_Gl.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PszwMgseyXF_Gl.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PszgMgseyXF_Gl.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbp2o-flEEny0FZhsfKu5WU4xD-IQ-PuZJJXxfpAO-LfjGbsVNLG7DGdF6OZ1PswAMgseyXFw.woff2",
		"https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2"
];

const STATIC_FILES = [
		self.location.origin + "/",
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
		...jetBrainsMonoFontUrls
];

const STATIC_FILES_FORMAT = /\/assets\//i;

self.addEventListener("install", (e) => {
		// Wait the event install until the callback inside is resolved
		e.waitUntil(
				caches.open(STATIC_CACHE_NAME).then((cache) => {
						console.log("Cache installed. ", cache);

						cache.addAll(STATIC_FILES).then(() => {
								console.log("Caching all files, done!");
						});
				})
		);
});

self.addEventListener("activate", (e) => {
		e.waitUntil(
				caches.keys().then(keys => {
						return Promise.all(
								keys
										.filter(key => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
										.map(key => caches.delete(key))
						);
				}).then(() => {
						return self.clients.claim(); // 👈 Ini dia yang bikin langsung aktif
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

												const isStaticFile = STATIC_FILES_FORMAT.test(e.request.url);


												if (isStaticFile) {
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

// TS file must export something
export default undefined
