'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ece023fcc5605abdf40ed327ee9d3867",
"assets/AssetManifest.bin.json": "863ede74e81e553b7628e0e6066d3cd6",
"assets/AssetManifest.json": "1aae5c843317cb0e98fdd94c0fac17c7",
"assets/assets/fonts/Agustina.ttf": "dc2e22aeb9024b30a058c690a7f9f7ba",
"assets/assets/gifs/commingsoon.gif": "b242b1600ee9221b30ddec3a49dd1189",
"assets/assets/gifs/loding-gif.gif": "102a9f484be00a51ebcf5157ca108dbe",
"assets/assets/images/agri.png": "90b6481992c182604c883487d458a320",
"assets/assets/images/appIcon.png": "fab1c8c7eea64de82dfc59b7e68c4258",
"assets/assets/images/four.png": "9924c7cb3611d9d8d906a4acf0472adb",
"assets/assets/images/gitam.png": "2119eb0402a246f446fff808da346f4a",
"assets/assets/images/GNWebsoft_Logo.png": "d1556064444cd8354115664aa8c7e0fd",
"assets/assets/images/ic_du_launcher_round.png": "7ea816d06fc3926532e999f41ffd9d9a",
"assets/assets/images/narayana.png": "20d126aba0233c917af7ae88a01c2ec7",
"assets/assets/images/one.png": "639b46572c65cb20a456e318233cceff",
"assets/assets/images/pmp.png": "860e772bed83442a59d7420d00299e13",
"assets/assets/images/school.png": "87ead32e6e47d1f92674919514540ba6",
"assets/assets/images/three.png": "60f36898a2b193b0a468c6f19368aa7f",
"assets/assets/images/two.png": "c9326110016f566fbc06a2d5042f5968",
"assets/FontManifest.json": "71d21cf70608a928b8abded3599319ed",
"assets/fonts/MaterialIcons-Regular.otf": "23c0da0146ae9e063edb034eaebff96a",
"assets/NOTICES": "9354b185b0e075ecfe85b80795c745a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d9a19dd2f89e3a99d387409ea025dbe7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "19617abb7c76c930e1be4672e7164831",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9fd6bd9c9bbceded4c00ee5955c60950",
"/": "9fd6bd9c9bbceded4c00ee5955c60950",
"main.dart.js": "fdfc989ee110ccaa4fec3cb53aaadcf4",
"manifest.json": "b66fe41322709fceadaa85ee7b20f487",
"splash/img/branding-1x.gif": "4edcac516580f1c12250297bea30034b",
"splash/img/branding-2x.gif": "855b89c9ae74461ed86fcf1679339888",
"splash/img/branding-3x.gif": "d7271c4b03a70461e068a0d927279f9e",
"splash/img/branding-4x.gif": "c354524cebc564fbd2db91d07c9e2d9b",
"splash/img/branding-dark-1x.gif": "4edcac516580f1c12250297bea30034b",
"splash/img/branding-dark-2x.gif": "855b89c9ae74461ed86fcf1679339888",
"splash/img/branding-dark-3x.gif": "d7271c4b03a70461e068a0d927279f9e",
"splash/img/branding-dark-4x.gif": "c354524cebc564fbd2db91d07c9e2d9b",
"splash/img/dark-1x.gif": "f92672f5e87f1ee85c3ee355d215ebf6",
"splash/img/dark-2x.gif": "d5afa7fdfcb85215b4b233d605d568b0",
"splash/img/dark-3x.gif": "b587ae6e1d9593c38ed29e6756858ad8",
"splash/img/dark-4x.gif": "b98f28b1977c1674f99ddad14edd57e7",
"splash/img/dark-background.gif": "66cd2c3604065ac50a05fc41d76852e9",
"splash/img/light-1x.gif": "f92672f5e87f1ee85c3ee355d215ebf6",
"splash/img/light-2x.gif": "d5afa7fdfcb85215b4b233d605d568b0",
"splash/img/light-3x.gif": "b587ae6e1d9593c38ed29e6756858ad8",
"splash/img/light-4x.gif": "b98f28b1977c1674f99ddad14edd57e7",
"splash/img/light-background.gif": "66cd2c3604065ac50a05fc41d76852e9",
"version.json": "c77795558ac9d70b12da05587026febc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
