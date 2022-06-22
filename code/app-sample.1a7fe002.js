import{s as i,r as l,$ as p,n as g}from"./index.e832ed51.js";var d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,b=(c,t,o,s)=>{for(var e=s>1?void 0:s?f(t,o):t,a=c.length-1,r;a>=0;a--)(r=c[a])&&(e=(s?r(t,o,e):r(e))||e);return s&&e&&d(t,o,e),e};let n=class extends i{static get styles(){return l`
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
      background-image: url('https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png');
    }
    `}constructor(){super()}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <div id="bg"></div>

      <div class="scroll-container">
        <img class="section" crossorigin="Anonymous" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png">
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/logo_512.png">
        <!-- https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70 -->
        <img class="section" crossorigin="Anonymous" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
        <img class="section" src="https://d3i5xkfad89fac.cloudfront.net/pwa/image/bg/bg.jpg">
       </div>
    `}};n=b([g("app-sample")],n);export{n as AppSample};
//# sourceMappingURL=app-sample.1a7fe002.js.map
