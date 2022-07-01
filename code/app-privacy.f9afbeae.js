import{s as c,r as i,$ as s,n as l}from"./index.b442bc5f.js";var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=(d,e,p,a)=>{for(var r=a>1?void 0:a?m(e,p):e,o=d.length-1,t;o>=0;o--)(t=d[o])&&(r=(a?t(e,p,r):t(r))||r);return a&&r&&u(e,p,r),r};let n=class extends c{static get styles(){return i`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
      min-height: calc(100vh - 76px);
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
      color: #000;
    }

    fluent-card h3 {
      margin: 10px auto;
    }

    fluent-card p {
      margin: 10px auto;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }
    `}constructor(){super()}render(){return s`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <h2>隐私条款</h2>
        <fluent-card>
          <h3>我们十分重视您的隐私</h3>
          <p>我们不使用 Cookie 和类似的技术。</p>
          <p>我们不收集您的个人数据，更不会使用和共享您的个人数据。</p>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};n=h([l("app-privacy")],n);export{n as AppPrivacy};
//# sourceMappingURL=app-privacy.f9afbeae.js.map