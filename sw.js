const V='cletuson-v12';
const F=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./cletus-portrait.jpg','./shop-team.jpg'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()));
});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  // Network-first: online app always prefers live version, falls back to cache only if offline
  e.respondWith(
    fetch(r).then(x=>{
      if(r.mode==='navigate'||r.url.includes('index.html')||r.url.includes('sw.js')||r.url.includes('manifest.json')){
        const c=x.clone();
        caches.open(V).then(h=>h.put(r.mode==='navigate'?'./index.html':r,c));
      }
      return x;
    }).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html')))
  );
});
