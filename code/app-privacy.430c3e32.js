import{s as c,r as s,$ as i,n as u}from"./index.e832ed51.js";var l=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(n,e,p,a)=>{for(var r=a>1?void 0:a?m(e,p):e,o=n.length-1,t;o>=0;o--)(t=n[o])&&(r=(a?t(e,p,r):t(r))||r);return a&&r&&l(e,p,r),r};let d=class extends c{static get styles(){return s`
    .about {
      padding: 0 16px;
      margin: 2rem 0 0rem 0;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.2);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.4);
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
    `}constructor(){super()}render(){return i`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <h2>隐私条款</h2>
        <fluent-card>
          <h3>我们十分重视您的隐私。</h3>
          <p>我们不收集您的个人数据，更不会使用和共享您的个人数据。</p>
          <p>我们不使用 Cookie 和类似的技术。</p>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};d=f([u("app-privacy")],d);export{d as AppPrivacy};
//# sourceMappingURL=app-privacy.430c3e32.js.map
