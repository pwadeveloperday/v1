import{s as i,r as s,$ as c,n as f}from"./index.e2b63653.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=(n,r,t,a)=>{for(var e=a>1?void 0:a?u(r,t):r,p=n.length-1,l;p>=0;p--)(l=n[p])&&(e=(a?l(r,t,e):l(e))||e);return a&&e&&h(r,t,e),e};let o=class extends i{static get styles(){return s`
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
    `}constructor(){super()}render(){return c`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-card>
          <h2>PWA 教程</h2>
          <ul>
            <li><fluent-anchor href="https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/" appearance="primary">30 days of PWA</fluent-anchor></li>
            <li><fluent-anchor href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" appearance="primary">MDN: 渐进式 Web 应用（PWA）</fluent-anchor></li>
            <li><fluent-anchor href="https://web.dev/progressive-web-apps/" appearance="primary">PWA: 采用所有正确组成要素的网站</fluent-anchor></li>
            <li><fluent-anchor href="/tutorial" appearance="primary">教程</fluent-anchor></li>
            <li><fluent-anchor href="/mobile" appearance="primary">测试</fluent-anchor></li>
          </ul>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};o=d([f("app-tutorial")],o);export{o as AppTutorial};
//# sourceMappingURL=app-tutorial.bbc153e6.js.map
