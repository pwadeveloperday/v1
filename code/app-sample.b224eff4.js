import{s as t,r as o,$ as s,n as m}from"./index.87674f05.js";var d=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(n,e,l,r)=>{for(var a=r>1?void 0:r?b(e,l):e,i=n.length-1,p;i>=0;i--)(p=n[i])&&(a=(r?p(e,l,a):p(a))||a);return r&&a&&d(e,l,a),a};let c=class extends t{static get styles(){return o`
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
            🌐 M20
            <a href="/sample/notification" appearance="primary">通知 (Notification)</a>
          </li>
          <li>
            🐡 M63
            <a href="/sample/generic-sensor" appearance="primary">通用传感器 (Generic Sensor)</a>
          </li>
          <li>
            🐡 M76
            <a href="/sample/async-clipboard" appearance="primary">异步剪贴板 (Async Clipboard)</a>
          </li>
          <li>
            🐡 M80
            <a href="/sample/contact-picker" appearance="primary">联系人选取器 (Contact Picker)</a>
          </li>
          <li>
            🐡 M81
            <a href="/sample/badging" appearance="primary">徽章 (Badging)</a>
          </li>
          <li>
            🐡 M83
            <a href="/sample/shape-detection" appearance="primary">形状检测 (Shape Detection)</a>
          </li>
          <li>
            🐡 M84
            <a href="/sample/wake-lock" appearance="primary">屏幕唤醒锁定 (Screen Wake Lock)</a>
          </li>
          <li>
            🐡 M85
              <a href="/sample/app-shortcuts" appearance="primary">
              应用快捷方式 (App Shortcuts)
            </a>
          </li>
          <li>
            🐡 M89
            <a href="/sample/web-share" appearance="primary">
              Web 共享 (Web Share)
            </a>
          </li>
          <li>
            🐡 M89
            <a href="/sample/file-system-access" appearance="primary">
              文件系统访问 (File System Access)
            </a>
          </li>
          <li>
            🌐 M93
            WebCodecs
          </li>
          <li>
            🐡 M95
            <a href="/sample/eyedropper" appearance="primary">
              滴管 (EyeDropper)
            </a>  
          </li>
          <li>
            🐡 M96
            <a href="/sample/url-protocol-handler" appearance="primary">
            URL 协议处理 (URL Protocol Handler)
            </a>
          </li>
          <li>
            🌐 M97
            WebTransport (v.s. WebSockets)
          </li>
          <li>
            🐡 M100
            多屏窗口放置 (Multi-Screen Window Placement)
          </li>
          <li>
            🌐 M102
            导航 (Navigation) (替代 History API)
          </li>
          <li>
            🐡 M102
            <a href="/sample/window-controls-overlay" appearance="primary">
              窗口控件覆盖 (Window Controls Overlay)
            </a>
          </li>
          <li>
            🐡 M102
            <a href="/sample/file-handling" appearance="primary">
              文件处理 (File Handling)
            </a>
          </li>
          <li>
            🐡 M102
            <a href="/sample/media-player" appearance="primary">
              文件处理 (File Handling) - 媒体播放器
            </a>
          </li>
          <li>
            🐡 M103
            <a href="/sample/local-font-access" appearance="primary">
              本地字体访问 (Local Font Access)
            </a>
          </li>
          <li>
            🌐 🚧 M104
              共享存储 (Shared Storage)
          </li>       
          <li>
            🐡 🚧 M104
            动态应用快捷方式 (Dynamic App Shortcuts)
          </li>
          <li>
            🌐 🚧
            WebGPU (Origin Trial: 94 to 105)
          </li>
          <li>
            🐡 🚧
            计算压力 (Compute Pressure)
          </li>
          <li>
            🌐 🚧
            Web 神经网络 (WebNN)
          </li>
        </ul>
      </fluent-card>
 
    </div>
    <app-footer></app-footer>
    `}};c=f([m("app-sample")],c);export{c as AppSample};
//# sourceMappingURL=app-sample.b224eff4.js.map
