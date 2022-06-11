import{s,r as i,$ as c,n as m}from"./index.27dea3c2.js";var u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f=(n,e,p,a)=>{for(var r=a>1?void 0:a?l(e,p):e,t=n.length-1,o;t>=0;t--)(o=n[t])&&(r=(a?o(e,p,r):o(r))||r);return a&&r&&u(e,p,r),r};let d=class extends s{static get styles(){return i`
    .about {
      padding: 0 16px;
      margin: 2rem 0 0rem 0;
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
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
    `}constructor(){super()}render(){return c`
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
    `}};d=f([m("app-privacy")],d);export{d as AppPrivacy};
//# sourceMappingURL=app-privacy.d9cce42c.js.map
