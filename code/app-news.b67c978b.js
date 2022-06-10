import{s as d,r as c,$ as i,n as m}from"./index.e844b11a.js";var l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(s,r,p,a)=>{for(var e=a>1?void 0:a?f(r,p):r,t=s.length-1,o;t>=0;t--)(o=s[t])&&(e=(a?o(r,p,e):o(e))||e);return a&&e&&l(r,p,e),e};let n=class extends d{static get styles(){return c`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
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
    `}};n=u([m("app-news")],n);export{n as AppNews};
//# sourceMappingURL=app-news.b67c978b.js.map
