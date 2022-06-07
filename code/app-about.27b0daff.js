import{s as c,r as h,$ as u,n as d}from"./index.fcc1d9b1.js";var i=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(p,r,s,a)=>{for(var e=a>1?void 0:a?m(r,s):r,t=p.length-1,o;t>=0;t--)(o=p[t])&&(e=(a?o(r,s,e):o(e))||e);return a&&e&&i(r,s,e),e};let n=class extends c{static get styles(){return h`

    fluent-card {
      padding: 1rem;
      margin-top: 1rem;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }
    `}constructor(){super()}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div>
        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};n=f([d("app-about")],n);export{n as AppAbout};
//# sourceMappingURL=app-about.27b0daff.js.map
