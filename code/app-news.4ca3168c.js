import{s as d,r as c,$ as l,n as u}from"./index.1f7d22cf.js";var i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(n,e,o,a)=>{for(var r=a>1?void 0:a?m(e,o):e,p=n.length-1,t;p>=0;p--)(t=n[p])&&(r=(a?t(e,o,r):t(r))||r);return a&&r&&i(e,o,r),r};let s=class extends d{static get styles(){return c`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.8);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: rgb(0, 0, 0);
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
        <h2>PWA 技术新闻</h2>
        <fluent-card>
          
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};s=f([u("app-news")],s);export{s as AppNews};
//# sourceMappingURL=app-news.4ca3168c.js.map
