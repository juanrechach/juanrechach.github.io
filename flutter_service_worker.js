'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "ce9c655d9711c0c168be4410054a279f",
"/": "ce9c655d9711c0c168be4410054a279f",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"manifest.json": "4742158bd1c4971611b722011fa622dc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "704da976a593f5745dadb2b6d4f9cefb",
"main.dart.js": "b1529f135b6c7fdb80373d4398588195",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cad57cfb94eb3ad1b116d4b83d4bded5",
"assets/AssetManifest.json": "1bd259fe9045686b9197de6d713c8d7d",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/commands/slotturnright.png": "15a1ae34916ee912b21c3677d1f898aa",
"assets/assets/commands/slotforward.png": "4f7ba92a7e2a0514a34c64c39b8d220a",
"assets/assets/commands/slotfastleft.png": "84b69cb4c9f66cc14e2ba121a938a5e6",
"assets/assets/commands/slotturnleft.png": "d57830249e4d6b7400037922f4fda8fa",
"assets/assets/commands/slotbackward.png": "9a3671d7d13a0784beda25470a295674",
"assets/assets/commands/slotempty.png": "f432e4613cc2b7b89af375606172dc55",
"assets/assets/commands/slotgreen.png": "d0f9d764742db2fd40192cb72b37781b",
"assets/assets/commands/slotfastright.png": "8810fe1a689b63cf2fbf677c905761e2",
"assets/assets/boarditems/e4.png": "9c690847dce5285551220544382bf582",
"assets/assets/boarditems/hole.png": "de2eab6864f5b53e67c9d9858dbd1531",
"assets/assets/boarditems/pusher_south.png": "70ba6616c4ecb5f9b5b06d23258bd47a",
"assets/assets/boarditems/e1.png": "cdd600ee25bfcb2aa53b933c65dab47c",
"assets/assets/boarditems/e2.png": "6ca93f309ccb75dae1a1cad4f02a7a47",
"assets/assets/boarditems/square.png": "e3bed47a7b0f0ce77b89ecd4d5dbf3d7",
"assets/assets/boarditems/wall_south.png": "c46d974ee3a0803ce6e38f68e8f0ea37",
"assets/assets/boarditems/gearleft.png": "9c43443f7dafcba19fba7ab88c8afe60",
"assets/assets/boarditems/pusher_north.png": "5159537d2d1b524fccb5370da0645043",
"assets/assets/boarditems/c1.png": "3d2c422c1177cf4baca3301f5ab0e0e8",
"assets/assets/boarditems/wall_north.png": "eb0cc8e32fbd7863a8c7562205d1f08a",
"assets/assets/boarditems/pusher_east.png": "2421b37a9db18b100b6a7832ff82c9bb",
"assets/assets/boarditems/pusher_west.png": "9e4fcdeed18b34af7d13b7c627942f32",
"assets/assets/boarditems/wall_east.png": "857ea19fbb52f96e4b570dee4b9c9f18",
"assets/assets/boarditems/e3.png": "6a597330f773bed73c9ba275d3b2b0ce",
"assets/assets/boarditems/e5.png": "c7636590164102d6c368a6edf0f5c94b",
"assets/assets/boarditems/e0.png": "3777b8f39da3830daf95aa2dfb284cf3",
"assets/assets/boarditems/gearright.png": "e3b5e24e0903195fd496a43f95c90b74",
"assets/assets/boarditems/wall_west.png": "e4b54197e23ef151690cb70ea69b0b4e",
"assets/assets/boarditems/wall.png": "6e99fe6c942ba650def95af60d3143d6",
"assets/assets/robotnude.png": "49b37b9aced64d85119284e6e0257000",
"assets/assets/robot_yellow.png": "fe6de12349057e11dc235edf641ccfa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "ae171aa1c7c577029e4158892f33961a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_bootstrap.js": "73d82b164714044b32139cbb1a926c37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
