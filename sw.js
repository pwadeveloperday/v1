if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(a.map((e=>l[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-fce6b9f0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/2022/people/120/alex.png",revision:"9905d25727210e57f1c68a34a40e68d1"},{url:"assets/2022/people/120/belem.png",revision:"198ba00999b491b172e3f97ec4e9b297"},{url:"assets/2022/people/120/cecilia.png",revision:"fd60f0c9b6fb35c27cb98a78ccfbefa1"},{url:"assets/2022/people/120/edwin.png",revision:"40872c6b7f9a20e934cf90765d4f81bf"},{url:"assets/2022/people/120/haoyu.png",revision:"c9166b8b2bc0be255a0f6610f6200720"},{url:"assets/2022/people/120/harry.png",revision:"e16b34230166b35f4457296aed734eb8"},{url:"assets/2022/people/120/hongjuan.png",revision:"ba10864b04429078ea83edb39e29aca1"},{url:"assets/2022/people/120/origin/alex.png",revision:"383e40d9a50edcbd9d033486809fee4f"},{url:"assets/2022/people/120/origin/belem.png",revision:"21dc94b7aa9efa0e36dbe0c666b7bb44"},{url:"assets/2022/people/120/origin/cecilia.png",revision:"00b0f9245c4088993b9662c0c74196db"},{url:"assets/2022/people/120/origin/edwin.png",revision:"b2c8f052cf6b168182106a17e42cea32"},{url:"assets/2022/people/120/origin/haoyu.png",revision:"dcc85e7cf3774d186c3971bb12795c63"},{url:"assets/2022/people/120/origin/harry.png",revision:"e04d9d4f43665c0f102b7ff281005f43"},{url:"assets/2022/people/120/origin/hongjuan.png",revision:"8911aa27cfddb546c959d042eddcd36f"},{url:"assets/2022/people/120/origin/pwabuilder.png",revision:"f626ca4106c64ba4729104fd59101caa"},{url:"assets/2022/people/120/origin/qi.png",revision:"1f9003364312dfdd8afa7a6f87b8c209"},{url:"assets/2022/people/120/origin/tianjian.png",revision:"454a75db7c73d641ef4f32b1b87d55ee"},{url:"assets/2022/people/120/origin/wanming.png",revision:"c32b723fba96cfd3f48ec82944ef1294"},{url:"assets/2022/people/120/origin/yuanhong.png",revision:"0c62aee068b9c3bfd900579da6035187"},{url:"assets/2022/people/120/pwabuilder.png",revision:"fdea1ea89e5d3b98d5b031f2a679f641"},{url:"assets/2022/people/120/qi.png",revision:"1fe398f395f9c9697299a67f5dc037d5"},{url:"assets/2022/people/120/tianjian.png",revision:"86039d217b841e0a395cc22f97449a98"},{url:"assets/2022/people/120/wanming.png",revision:"c70087a66017af9b077db78b7e1400d7"},{url:"assets/2022/people/120/wpe.png",revision:"67127ed055c4bb76978bec267bc7f524"},{url:"assets/2022/people/120/yuanhong.png",revision:"e300988b5651291ef406a813dc1b50da"},{url:"assets/2022/people/500/alex.png",revision:"346439a1618feaead31d114711352c2c"},{url:"assets/2022/people/500/belem.png",revision:"67b91578bbf05fc89810d6ed739a720a"},{url:"assets/2022/people/500/cecilia.png",revision:"3346380b149495d0a16e1d48495957b4"},{url:"assets/2022/people/500/edwin.png",revision:"d4de3ce540aff086fbc4e38f7812af45"},{url:"assets/2022/people/500/haoyu.png",revision:"4eff0075ecefb7985e7b0604c641962a"},{url:"assets/2022/people/500/harry.png",revision:"24f14afc6af341f3ffb025bf6b52a357"},{url:"assets/2022/people/500/hongjuan.png",revision:"d5327c7a28032aa8924a6ff96bc77de3"},{url:"assets/2022/people/500/origin/alex.png",revision:"2e1f67a4d8dcfb84d34efb2754d131d6"},{url:"assets/2022/people/500/origin/belem.png",revision:"d7cd546d9dc4767efe4059110f807f7d"},{url:"assets/2022/people/500/origin/cecilia.png",revision:"5240e62682b0d75ec0d75da166a3248c"},{url:"assets/2022/people/500/origin/edwin.png",revision:"6baa16c5800ce515587a26d4fa11a425"},{url:"assets/2022/people/500/origin/haoyu.png",revision:"72cd89b3f74b3ecf67af26656a28c53a"},{url:"assets/2022/people/500/origin/harry.png",revision:"83983c0fd95351551ab22a132403fa8d"},{url:"assets/2022/people/500/origin/hongjuan.png",revision:"b3c6a77688b392e1ab9a28faf748c21c"},{url:"assets/2022/people/500/origin/pwabuilder.png",revision:"cee48c1be35f4476aa339e24f92964bd"},{url:"assets/2022/people/500/origin/qi.png",revision:"b2856e440a0a404521135756eab3ba13"},{url:"assets/2022/people/500/origin/tianjian.png",revision:"50293413613c072bffc848f8b9169954"},{url:"assets/2022/people/500/origin/wanming.png",revision:"cded4469c9aeecb43d426a285081373e"},{url:"assets/2022/people/500/origin/yuanhong.png",revision:"1d2c03e8a9927540924536732e1c0b3b"},{url:"assets/2022/people/500/pwabuilder.png",revision:"029564b6f696e48b44eff2d68680d374"},{url:"assets/2022/people/500/qi.png",revision:"29447a4615377b8f194ca250ebca108e"},{url:"assets/2022/people/500/tianjian.png",revision:"fe29c5966d4f468204404d1c9009fccc"},{url:"assets/2022/people/500/wanming.png",revision:"0d0082b31bfc6a6367d0f758ee723706"},{url:"assets/2022/people/500/yuanhong.png",revision:"a33f8e5b20358b21b993c577f9e2c460"},{url:"assets/2022/wechat_admin_invite_t.png",revision:"3a1496a483c63495f7b9272f3754a6a8"},{url:"assets/2022/wechat_group_1_t.png",revision:"dba648936d873e7b4b238d0ffb6cf03d"},{url:"assets/blog/1/4.png",revision:"a9ee20610b487c53ef292d1bc3642c4c"},{url:"assets/blog/1/5.png",revision:"1494babdb88db065ba4527eae05d401c"},{url:"assets/blog/1/6.png",revision:"2fd9c9ffc7dc6909ec275d144ba309cf"},{url:"assets/blog/1/7.png",revision:"1190d9b181c2baab60441e531385046c"},{url:"assets/blog/wasm/p1.png",revision:"e87a7e5b9a6514075f6ebc412876333f"},{url:"assets/blog/wasm/p2.png",revision:"1d9faed383cd18e47e8b47210bab8aed"},{url:"assets/blog/wasm/p3.png",revision:"5f4b9a4c2b0bdf1a472b4ff56484525b"},{url:"assets/blog/wasm/p4.png",revision:"7324174b9d6f21780350e8055bf53224"},{url:"assets/blog/wasm/p5.png",revision:"de57991fc6d1638aacf551b61b47e875"},{url:"assets/blog/wasm/p6.png",revision:"2c7846cce1bae45f14767368f7c243c7"},{url:"assets/blog/wasm/p7.png",revision:"3a1f1c158aa5a98288b7c73dbb2380ca"},{url:"assets/icons/apple-touch-icon.png",revision:"559674d96dfeb82f36af4539334e134d"},{url:"assets/icons/icon_144.png",revision:"33ff58e84a58cc783d53a3f5ae0ad101"},{url:"assets/icons/icon_16.png",revision:"020d9e3d6b4d8b353d66d25d2df527f6"},{url:"assets/icons/icon_168_.png",revision:"ce39cc666f4a8304860835e515139f5e"},{url:"assets/icons/icon_168.png",revision:"ce39cc666f4a8304860835e515139f5e"},{url:"assets/icons/icon_192_.png",revision:"64c61139a246f552bde3a9df7118760f"},{url:"assets/icons/icon_192.png",revision:"19184fbb5d366897eb5a02939b5779d9"},{url:"assets/icons/icon_32.png",revision:"fbca2677af4b9267f81f4b33da2aec00"},{url:"assets/icons/icon_48.png",revision:"e1d6b8ec011e13105c43a1d440c59c27"},{url:"assets/icons/icon_512_.png",revision:"df81847277f9f1a7dfd6d7aa0ca9023b"},{url:"assets/icons/icon_512.png",revision:"44ec18f1c2eab183e5f0ba6314da2d7b"},{url:"assets/icons/icon_72.png",revision:"fc70d4c43ea0d2d5e6ec43fd380355e4"},{url:"assets/icons/icon_96.png",revision:"ee5ad75bb44004d96fcaa9e1f780f9f2"},{url:"assets/logo/chrome.png",revision:"fa57dce03977758d30dc76fdb629ff7d"},{url:"assets/logo/chromium.png",revision:"9d8fd638b4e68066c50fa30bd1d24ca6"},{url:"assets/logo/edge.png",revision:"f7b816aafd1448afd6ff5a757dea7e93"},{url:"assets/logo/firefox.png",revision:"47ff71667d3625a6df8c4b23b063c661"},{url:"assets/logo/intel-logo-1-1.png",revision:"c5a5ead7e00b28796d48b5fe3f962599"},{url:"assets/logo/intel-logo.png",revision:"1bbde9b9af98f7aaafa5368bb98714f9"},{url:"assets/logo/intel.png",revision:"19a9c78ec6497cd4f992245199a60d4f"},{url:"assets/logo/opera.png",revision:"46dc922012fe9bd8f768663e9c671e1e"},{url:"assets/logo/safari.png",revision:"5ac2fc1cfe172050bd405de6475bba74"},{url:"assets/logo/vivaldi.png",revision:"0a78bb3222a9898bfc75aeddbc1fbb76"},{url:"assets/screenshots/screen.png",revision:"c3d2ca01c3ee31f392221d0a952d2e31"},{url:"code/app-2021.d1b8a680.js",revision:null},{url:"code/app-2022.da4ac492.js",revision:null},{url:"code/app-about.38f66567.js",revision:null},{url:"code/app-blog.b279f6f8.js",revision:null},{url:"code/app-coc.ff44f2ea.js",revision:null},{url:"code/app-privacy.2b358ef9.js",revision:null},{url:"code/app-tutorial.e9e11913.js",revision:null},{url:"code/index.079a88c6.js",revision:null},{url:"code/index.fd189ef9.css",revision:null},{url:"code/sample-fh.ecbee60b.js",revision:null},{url:"code/sample-mp.bcc003b9.js",revision:null},{url:"index.html",revision:"c5982659ea82ce80e7d88a07f87a7551"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
