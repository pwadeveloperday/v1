import{s as c,r as d,$ as p,n as l}from"./index.a1d1d5b7.js";var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,i=(o,r,t,a)=>{for(var e=a>1?void 0:a?f(r,t):r,s=o.length-1,n;s>=0;s--)(n=o[s])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&h(r,t,e),e};let u=class extends c{static get styles(){return d`

    fluent-card {
      padding: 0px 18px 18px;
    }

    @media(prefers-color-scheme: light) {
      fluent-card {
        --fill-color: #edebe9;
      }
    }

    @media(prefers-color-scheme: dark) {
      fluent-card {
        --fill-color: #4e4e4e;
        color: white;
        border: none;
      }
    }

    @media (min-width: 1024px) {
      fluent-card {
        width: 54%;
      }
    }
    `}constructor(){super()}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/about">关于</fluent-breadcrumb-item>
      </fluent-breadcrumb>

      <div>
        <h2>About Page</h2>

        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>
        </fluent-card>
      </div>
    `}};u=i([l("app-about")],u);export{u as AppAbout};
//# sourceMappingURL=app-about.300ee28d.js.map
