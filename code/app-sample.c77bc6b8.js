import{s as d,r as p,$ as u,n as b}from"./index.8aff652c.js";var i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,m=(c,r,t,a)=>{for(var e=a>1?void 0:a?s(r,t):r,l=c.length-1,o;l>=0;l--)(o=c[l])&&(e=(a?o(r,t,e):o(e))||e);return a&&e&&i(r,t,e),e};let n=class extends d{static get styles(){return p`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
      min-height: calc(100vh - 174px);
    }
    h2 {
      margin: 0;
      padding: 16px 0;
      color: rgba(0, 113, 197, 0.9);
    }
    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.5);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
    }

    
    fluent-card ul {
      list-style: circle;
      margin-left: -2rem;
    }

    fluent-card ul li {
      display: block;
      list-style: circle;
    }

    fluent-card ul li a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    fluent-card ul li a:hover {
      color: rgba(0, 113, 197, 1);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 1);
    }

    `}constructor(){super()}render(){return u`
    <app-header ?enableBack="${!0}"></app-header>
    <div class="about">  
      <fluent-breadcrumb>
        <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
      </fluent-breadcrumb>
      <h2>PWA 示例</h2>
      <fluent-card>
        <ul>
          <li>
            🐡 M103
            <a href="/sample/local-font-access" appearance="primary">
              本地字体访问 (Local Font Access)
            </a>
          </li>
        </ul>
      </fluent-card>
 
    </div>
    <app-footer></app-footer>
    `}};n=m([b("app-sample")],n);export{n as AppSample};
//# sourceMappingURL=app-sample.c77bc6b8.js.map
