import{s as i,r as n,$ as p,n as d}from"./index.fcc1d9b1.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(o,t,a,r)=>{for(var e=r>1?void 0:r?b(t,a):t,s=o.length-1,c;s>=0;s--)(c=o[s])&&(e=(r?c(t,a,e):c(e))||e);return r&&e&&g(t,a,e),e};let l=class extends i{static get styles(){return n`
    .scroll-container {
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
    }
    
    .section {
      height: 100vh;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    
    .section {
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
    
    body {
      margin: 0;
    }
    #bg {
      background-image: url('https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg');
    }
    `}constructor(){super()}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <div id="bg"></div>

      <div class="scroll-container">
        <!-- https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70 -->
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
       </div>
    `}};l=f([d("app-mobile")],l);export{l as AppMobile};
//# sourceMappingURL=app-mobile.7a9d2a7a.js.map
