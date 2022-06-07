import{s as c,r as u,$ as d,n as h}from"./index.c8d51b44.js";var i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,l=(p,a,s,r)=>{for(var e=r>1?void 0:r?m(a,s):a,t=p.length-1,o;t>=0;t--)(o=p[t])&&(e=(r?o(a,s,e):o(e))||e);return r&&e&&i(a,s,e),e};let n=class extends c{static get styles(){return u`
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
    `}constructor(){super()}render(){return d`
      <app-header ?enableBack="${!0}"></app-header>
      <app-nav></app-nav>
      <div class="about">
        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};n=l([h("app-about")],n);export{n as AppAbout};
//# sourceMappingURL=app-about.aaa630b1.js.map
