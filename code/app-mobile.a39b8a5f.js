import{s as n,r as i,$ as p,n as b}from"./index.a1d1d5b7.js";var v=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=(l,r,t,s)=>{for(var e=s>1?void 0:s?d(r,t):r,c=l.length-1,o;c>=0;c--)(o=l[c])&&(e=(s?o(r,t,e):o(e))||e);return s&&e&&v(r,t,e),e};let a=class extends n{static get styles(){return i`
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
    `}constructor(){super()}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>

      <div class="scroll-container">
        <!-- https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70 -->
        <img class="section" src="">
        <img class="section" src="">
       </div>
    `}};a=f([b("app-mobile")],a);export{a as AppMobile};
//# sourceMappingURL=app-mobile.a39b8a5f.js.map
