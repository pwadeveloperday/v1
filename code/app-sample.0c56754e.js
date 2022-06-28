import{s as b,r as c,$ as d,n as f}from"./index.eab98fae.js";var m=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=(n,r,t,a)=>{for(var e=a>1?void 0:a?s(r,t):r,p=n.length-1,u;p>=0;p--)(u=n[p])&&(e=(a?u(r,t,e):u(e))||e);return a&&e&&m(r,t,e),e};let l=class extends b{static get styles(){return c`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
      min-height: calc(100vh - 174px);
    }
    fluent-card {
      border-radius: 0px;
      box-shadow: none;
    }
    `}constructor(){super()}render(){return d`
    <app-header ?enableBack="${!0}"></app-header>
    <div class="about">  
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/mediaplayer">播放</fluent-breadcrumb-item>
      </fluent-breadcrumb>

      <h2>媒体播放器</h2>
      <fluent-card>
        
      </fluent-card>
    </div>
    <app-footer></app-footer>
    `}};l=o([f("app-sample")],l);export{l as AppSample};
//# sourceMappingURL=app-sample.0c56754e.js.map
