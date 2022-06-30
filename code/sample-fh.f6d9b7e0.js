import{s,r as p,$ as u,i as d,n as g}from"./index.0add0ff8.js";import"./lit-video.6fc33520.js";var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(a,e,o,r)=>{for(var i=r>1?void 0:r?b(e,o):e,l=a.length-1,n;l>=0;l--)(n=a[l])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&m(e,o,i),i};let t=class extends s{constructor(){super()}async _playFileHandlerVideo(){"launchQueue"in window&&"files"in LaunchParams.prototype&&(console.log("\u60A8\u7684\u6D4F\u89C8\u5668\u652F\u6301\u6587\u4EF6\u5904\u7406 API"),launchQueue.setConsumer(async a=>{if(!a.files.length){this.msg.innerHTML="\u6CA1\u6709\u4ECE\u89C6\u9891\u6587\u4EF6\u90AE\u4EF6\u83DC\u5355\u6253\u5F00\u672C\u9875\u9762";return}for(let e of a.files){[e]=await showOpenFilePicker();const o=await e.getFile();this.video.src=URL.createObjectURL(o)}}))}async connectedCallback(){super.connectedCallback(),this._playFileHandlerVideo()}static get styles(){return p`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
      min-height: calc(100vh - 76px);
    }

    h2 {
      font-size: 1.2rem;
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

    .spam {
      display: none;
    }

    #status {
      display: inline;
    }

    #result {
      display: none;
    }

    .previewv {
      margin: 16px auto;
      text-align: left;
      writing-mode:vertical-rl;
      letter-spacing: 4px;
      font-size: 1.8rem;
    }

    .previewv h3, .previewv h4 {
      margin: 0 auto;
    }

    .previewv h4 {
      margin-left: 16px;
    }

    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      border-bottom: 0px dashed rgba(255, 255, 255, 0.6);;
    }

    a:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      border-bottom: 1px dashed rgba(255, 255, 255, 1);
    }

    #st {
      padding: 0;
    }

    #st {
      color: rgba(255, 255, 255, 0.9);
    }

    #st:hover {
      color: rgba(255, 255, 255, 1.0);
    }

    .tut {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
    }

    .tut a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .tut a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    .w3c {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 199, 253, 0.9);
    }
    .w3c:hover {
      background-color: rgba(0, 199, 253, 1.0);
    }
    
    .imp {
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 113, 197, 0.9);
      align-items: center;
      justify-content: space-around;
    }
    .imp:hover {
      background-color: rgba(0, 113, 197, 1.0);
    }

    .imp .yes {
      fill: rgba(255, 255, 255, 0.9);
    }

    .imp:hover .yes {
      fill: rgba(255, 255, 255, 1.0);
    }

    .imp .no {
      fill: rgba(255, 255, 255, 0.1);
    }

    .imp:hover .no {
      fill: rgba(0, 0, 0, 0.4);
    }

    .des {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 2px 8px;
    }

    .cate, .det {
      display: inline-block;
    }
    .cate .yes, .det .yes, .cate .no, .det .no{
      display: inline-block;
      width: 16px;
      padding: 0 4px;
    }

    .cate {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      display: none;
    }

    .q {
      margin: 16px auto;
    }

    .w3clogo {
      margin-right: 6px;
    }

    .act div {
      margin-top: 16px;
    }

    .act a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .act a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    `}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>文件处理 (File Handling) API</h2>
        <fluent-card class="act">
          <lit-video 
            id="first-video"
            intervalreproduction="#t=1,5" 
            option="simple" 
            src="" 
            type="video/mp4">
          </lit-video>
          <div>
            <div id="msg"></div>
            将“中国 PWA 开发者日”应用注册为您电脑的 .mp4 视频文件的默认播放器
            <ul>
              <li>浏览器启用 chrome://flags#file-handling-api</li>
              <li>访问 <a href="https://pwadev.io">https://pwadev.io</a></li>
              <li>安装为本地 PWA 应用</li>
              <li>在本地电脑右键点击一个视频文件</li>
              <li>右键菜单选择“打开方式” -&gt; 选择“中国 PWA 开发者日”打开</li>
            </ul>
          </div>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/i18n/zh/file-handling/" title="The File System Access API: simplifying access to local files">
              教程：注册应用到系统的文件处理
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://wicg.github.io/manifest-incubations/index.html#file_handlers-member" title="File Handling">File Handling</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5721776357113856" title="在 Chromium 102 版本支持">🐡 M102</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome 浏览器"></icon-chr>
              <icon-edg class="yes" title="微软 Edge 浏览器"></icon-edg> <icon-ope class="yes" title="Opera 浏览器"></icon-ope> <icon-viv class="yes" title="Vivaldi 浏览器"></icon-viv>
              <icon-saf class="no" title="Apple Safari 浏览器"></icon-saf> <icon-fir class="no" title="Mozilla Firefox 浏览器"></icon-fir>
              </div>
            </div>
            <div class="des">
              <div class="det">
                <icon-mac class="yes" title="Mac"></icon-mac> <icon-win class="yes" title="Windows"></icon-win> <icon-lin class="yes" title="Linux"></icon-lin> 
              </div>
              <div class="det">
                <icon-and class="no" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};c([d("#first-video")],t.prototype,"video",2);c([d("#msg")],t.prototype,"msg",2);t=c([g("sample-fh")],t);export{t as SampleFH};
//# sourceMappingURL=sample-fh.f6d9b7e0.js.map
