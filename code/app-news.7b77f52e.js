import{s as d,r as c,$ as l,n as f}from"./index.e2b63653.js";var i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,u=(o,r,t,p)=>{for(var e=p>1?void 0:p?m(r,t):r,a=o.length-1,s;a>=0;a--)(s=o[a])&&(e=(p?s(r,t,e):s(e))||e);return p&&e&&i(r,t,e),e};let n=class extends d{static get styles(){return c`
    .about {
      padding: 0 16px;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }
    `}constructor(){super()}render(){return l`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-card>
          <h2>PWA 技术新闻</h2>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};n=u([f("app-news")],n);export{n as AppNews};
//# sourceMappingURL=app-news.7b77f52e.js.map
