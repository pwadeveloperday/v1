import{s as o,r as c,$ as s,n as d}from"./index.4ac3a314.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,u=(p,r,l,a)=>{for(var e=a>1?void 0:a?m(r,l):r,i=p.length-1,t;i>=0;i--)(t=p[i])&&(e=(a?t(r,l,e):t(e))||e);return a&&e&&b(r,l,e),e};let n=class extends o{static get styles(){return c`
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
            🐡 M
            <a href="/sample/generic-sensor" appearance="primary">通用传感器 (Generic Sensor) API</a>
          </li>
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
            🐡 M102
            <a href="/sample/media-player" appearance="primary">
              文件处理 (File Handling) API - 媒体播放器
            </a>
          </li>
          <li>
            🐡 M103
            <a href="/sample/local-font-access" appearance="primary">
              本地字体访问 (Local Font Access) API
            </a>
          </li>
          <li>
            🚧 🐡 [开发中]
            计算压力 (Compute Pressure) API
          </li>
          <li>
            🚧 [开发中]
            WebGPU API
          </li>
          <li>
            🚧 🐡 [开发中]
            动态应用快捷方式 (Dynamic App Shortcuts)
          </li>
          <li>
            🚧 [开发中]
            Web 神经网络 (Web Neural Network, WebNN) API
          </li>
        </ul>
      </fluent-card>
 
    </div>
    <app-footer></app-footer>
    `}};n=u([d("app-sample")],n);export{n as AppSample};
//# sourceMappingURL=app-sample.364cd266.js.map
