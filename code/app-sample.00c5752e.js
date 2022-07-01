import{s as p,r as c,$ as s,n as d}from"./index.78b2020d.js";var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=(o,r,l,a)=>{for(var e=a>1?void 0:a?u(r,l):r,t=o.length-1,i;t>=0;t--)(i=o[t])&&(e=(a?i(r,l,e):i(e))||e);return a&&e&&b(r,l,e),e};let n=class extends p{static get styles(){return c`
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
      margin: 8px auto;
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

    `}constructor(){super()}render(){return s`
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
            🐡 M81
            徽章 (Badging) API
          </li>
          <li>
            🐡 M85
            应用快捷方式 (App Shortcuts)
          </li>
          <li>
            🐡 M89
            <a href="/sample/web-share" appearance="primary">
              Web 共享 (Web Share) API
            </a>
          </li>
          <li>
            🐡 M89
            <a href="/sample/file-system-access" appearance="primary">
              文件系统访问 (File System Access) API
            </a>
          </li>
          <li>
            🐡 M93
            WebCodecs API
          </li>
          <li>
            🐡 M97
            WebTransport (Perfectly supported Web-based Intelligent Collaboration)
          </li>
          <li>
            🐡 M102
            窗口控件覆盖 (Window Controls Overlay for Installed Desktop Web Apps)
          </li>
          <li>
            🐡 M102
            <a href="/sample/file-handling" appearance="primary">
              文件处理 (File Handling) API
            </a>
          </li>
          <li>
            🐡 M103
            <a href="/sample/local-font-access" appearance="primary">
              本地字体访问 (Local Font Access) API
            </a>
          </li>
          <li>
            🐡 开发中
            动态应用快捷方式 (Dynamic App Shortcuts)
          </li>
        </ul>
      </fluent-card>
 
    </div>
    <app-footer></app-footer>
    `}};n=m([d("app-sample")],n);export{n as AppSample};
//# sourceMappingURL=app-sample.00c5752e.js.map
