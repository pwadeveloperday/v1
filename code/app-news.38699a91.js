import{s as n,r as c,$ as i,n as l}from"./index.d6c957b0.js";var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=(s,r,p,a)=>{for(var e=a>1?void 0:a?u(r,p):r,t=s.length-1,o;t>=0;t--)(o=s[t])&&(e=(a?o(r,p,e):o(e))||e);return a&&e&&f(r,p,e),e};let d=class extends n{static get styles(){return c`
    .about {
      padding: 0 16px;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }
    `}constructor(){super()}render(){return i`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-card>
          <h2>PWA 技术新闻</h2>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};d=m([l("app-news")],d);export{d as AppNews};
//# sourceMappingURL=app-news.38699a91.js.map
