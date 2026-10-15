const V='cletuson-v16';
// Online-only app: network first, minimal cache for install assets only
const F=['./manifest.json','./icon-192.png','./icon-512.png'];
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
  // Strict network-first: if offline, fail (app shows offline screen)
  e.respondWith(
    fetch(r).then(x=>{
      return x;
    }).catch(()=>{
      if(r.url.includes('icon-')||r.url.includes('manifest.json')){
        return caches.match(r);
      }
      return new Response('Offline',{status:503,statusText:'Offline'});
    })
  );
});
