if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-fce6b9f0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/2022/people/120/alex.png",revision:"9905d25727210e57f1c68a34a40e68d1"},{url:"assets/2022/people/120/belem.png",revision:"198ba00999b491b172e3f97ec4e9b297"},{url:"assets/2022/people/120/edwin.png",revision:"40872c6b7f9a20e934cf90765d4f81bf"},{url:"assets/2022/people/120/harry.png",revision:"e16b34230166b35f4457296aed734eb8"},{url:"assets/2022/people/120/origin/alex.png",revision:"383e40d9a50edcbd9d033486809fee4f"},{url:"assets/2022/people/120/origin/belem.png",revision:"21dc94b7aa9efa0e36dbe0c666b7bb44"},{url:"assets/2022/people/120/origin/edwin.png",revision:"b2c8f052cf6b168182106a17e42cea32"},{url:"assets/2022/people/120/origin/harry.png",revision:"e04d9d4f43665c0f102b7ff281005f43"},{url:"assets/2022/people/120/origin/qi.png",revision:"1f9003364312dfdd8afa7a6f87b8c209"},{url:"assets/2022/people/120/qi.png",revision:"1fe398f395f9c9697299a67f5dc037d5"},{url:"assets/2022/people/500/alex.png",revision:"346439a1618feaead31d114711352c2c"},{url:"assets/2022/people/500/belem.png",revision:"67b91578bbf05fc89810d6ed739a720a"},{url:"assets/2022/people/500/edwin.png",revision:"d4de3ce540aff086fbc4e38f7812af45"},{url:"assets/2022/people/500/harry.png",revision:"24f14afc6af341f3ffb025bf6b52a357"},{url:"assets/2022/people/500/origin/alex.png",revision:"2e1f67a4d8dcfb84d34efb2754d131d6"},{url:"assets/2022/people/500/origin/belem.png",revision:"d7cd546d9dc4767efe4059110f807f7d"},{url:"assets/2022/people/500/origin/edwin.png",revision:"6baa16c5800ce515587a26d4fa11a425"},{url:"assets/2022/people/500/origin/harry.png",revision:"83983c0fd95351551ab22a132403fa8d"},{url:"assets/2022/people/500/origin/qi.png",revision:"b2856e440a0a404521135756eab3ba13"},{url:"assets/2022/people/500/qi.png",revision:"29447a4615377b8f194ca250ebca108e"},{url:"assets/icons/apple-touch-icon.png",revision:"559674d96dfeb82f36af4539334e134d"},{url:"assets/icons/icon_144.png",revision:"33ff58e84a58cc783d53a3f5ae0ad101"},{url:"assets/icons/icon_16.png",revision:"020d9e3d6b4d8b353d66d25d2df527f6"},{url:"assets/icons/icon_168_.png",revision:"ce39cc666f4a8304860835e515139f5e"},{url:"assets/icons/icon_168.png",revision:"ce39cc666f4a8304860835e515139f5e"},{url:"assets/icons/icon_192_.png",revision:"64c61139a246f552bde3a9df7118760f"},{url:"assets/icons/icon_192.png",revision:"19184fbb5d366897eb5a02939b5779d9"},{url:"assets/icons/icon_32.png",revision:"fbca2677af4b9267f81f4b33da2aec00"},{url:"assets/icons/icon_48.png",revision:"e1d6b8ec011e13105c43a1d440c59c27"},{url:"assets/icons/icon_512_.png",revision:"df81847277f9f1a7dfd6d7aa0ca9023b"},{url:"assets/icons/icon_512.png",revision:"44ec18f1c2eab183e5f0ba6314da2d7b"},{url:"assets/icons/icon_72.png",revision:"fc70d4c43ea0d2d5e6ec43fd380355e4"},{url:"assets/icons/icon_96.png",revision:"ee5ad75bb44004d96fcaa9e1f780f9f2"},{url:"assets/img/vbg.png",revision:"d9e78a60eafd665da2d35fdd8e3220ed"},{url:"assets/logo/intel-logo-1-1.png",revision:"c5a5ead7e00b28796d48b5fe3f962599"},{url:"assets/logo/intel-logo.png",revision:"1bbde9b9af98f7aaafa5368bb98714f9"},{url:"assets/logo/intel.png",revision:"19a9c78ec6497cd4f992245199a60d4f"},{url:"assets/screenshots/screen.png",revision:"3754aedea974300436c5b9edc6deda53"},{url:"code/app-2021.2e77c95b.js",revision:null},{url:"code/app-2022.f514784e.js",revision:null},{url:"code/app-about.5646b707.js",revision:null},{url:"code/app-coc.65ac9c38.js",revision:null},{url:"code/app-mediaplayer.bd8b25e7.js",revision:null},{url:"code/app-news.b67c978b.js",revision:null},{url:"code/app-privacy.4cfe538a.js",revision:null},{url:"code/app-sample.a785a2ea.js",revision:null},{url:"code/app-tutorial.9846dcdd.js",revision:null},{url:"code/index.59cb4980.css",revision:null},{url:"code/index.e844b11a.js",revision:null},{url:"index.html",revision:"ced76f6044b63e4f28e369a51ce719ae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
