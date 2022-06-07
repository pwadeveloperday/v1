import{s as d,r as c,$ as l,n as f}from"./index.c8d51b44.js";var i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,u=(n,r,a,p)=>{for(var e=p>1?void 0:p?m(r,a):r,t=n.length-1,s;t>=0;t--)(s=n[t])&&(e=(p?s(r,a,e):s(e))||e);return p&&e&&i(r,a,e),e};let o=class extends d{static get styles(){return c`
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
      <app-nav></app-nav>
      <div class="about">
        <fluent-card>
          <h2>PWA 技术新闻</h2>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};o=u([f("app-news")],o);export{o as AppNews};
//# sourceMappingURL=app-news.d6c89a40.js.map
