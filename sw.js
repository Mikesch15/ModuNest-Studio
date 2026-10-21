/* Service Worker: macht Konfigurator und Admin installierbar und offline startbar.
   Immer zuerst aus dem Netz (damit Updates sofort ankommen), ohne Netz aus dem Zwischenspeicher.
   Server-Aufrufe (Supabase, andere Domains) werden nie zwischengespeichert. f4b9c2727c/["", "./", "admin/", "admin/manifest.webmanifest", "app/", "app/manifest.webmanifest", "app/modunest/", "config.js", "icons/admin-192.png", "icons/admin-512.png", "icons/admin-apple-180.png", "icons/admin-maskable-512.png", "icons/apple-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "modunest/"] setzt assemble.py. */
const V='mn-f4b9c2727c',PRE=["", "./", "admin/", "admin/manifest.webmanifest", "app/", "app/manifest.webmanifest", "app/modunest/", "config.js", "icons/admin-192.png", "icons/admin-512.png", "icons/admin-apple-180.png", "icons/admin-maskable-512.png", "icons/apple-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "modunest/"];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(V).then(k=>k.put(r,c))}return res})
  .catch(()=>caches.match(r,{ignoreSearch:true}).then(x=>x||(r.mode==='navigate'?caches.match('app/'):Response.error()))))});
