import{s as n,r as m,$ as s,n as b}from"./index.124f0479.js";var f=Object.defineProperty,o=Object.getOwnPropertyDescriptor,d=(c,r,a,t)=>{for(var e=t>1?void 0:t?o(r,a):r,p=c.length-1,u;p>=0;p--)(u=c[p])&&(e=(t?u(r,a,e):u(e))||e);return t&&e&&f(r,a,e),e};let l=class extends n{static get styles(){return m`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
      min-height: calc(100vh - 174px);
    }
    fluent-card {
      border-radius: 0px;
      box-shadow: none;
    }
    `}constructor(){super()}render(){return s`
    <app-header ?enableBack="${!0}"></app-header>
    <div class="about">  
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/sample-local-font-access">Local Font Access API</fluent-breadcrumb-item>
      </fluent-breadcrumb>
 
    </div>
    <app-footer></app-footer>
    `}};l=d([b("app-sample")],l);export{l as AppSample};
//# sourceMappingURL=app-sample.249c27c3.js.map
