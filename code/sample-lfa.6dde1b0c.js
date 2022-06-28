import{s as i,r as d,$ as p,i as u,n as f}from"./index.124f0479.js";var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(o,e,s,a)=>{for(var t=a>1?void 0:a?b(e,s):e,n=o.length-1,c;n>=0;n--)(c=o[n])&&(t=(a?c(e,s,t):c(t))||t);return a&&t&&m(e,s,t),t};let r=class extends i{constructor(){super()}async _requestPermission(){"fonts"in navigator?console.log("\u652F\u6301\u672C\u5730\u5B57\u4F53\u8BBF\u95EE API"):console.log("\u4E0D\u652F\u6301\u672C\u5730\u5B57\u4F53\u8BBF\u95EE API")}_updateFontSelector(o){const e=o.target;console.log(`\u{1F916} ${e.id}: Value changed to "${e.value}".`),this.preview.style.fontFamily=e.value}async _showLocalFonts(){this.localfontselector.disabled=this.localfontselector.disabled||!("queryLocalFonts"in self),this.localfontselector.addEventListener("change",this._updateFontSelector)}async connectedCallback(){super.connectedCallback()}static get styles(){return d`
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

    .spam {
      display: none;
    }
    `}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>本地字体访问 API (Local Font Access API)</h2>
        <fluent-card>
          <h3>前提</h3>
          <p>
            <ul>
              <li>Chrome M103 及更高版本</li>
              <li>设置 <a href="chrome://flags/#font-access">chrome://flags/#font-access</a> 并打开</li>
            </ul>
          </p>
          <h3>使用</h3>
          <button id ="btnrequest" @click="${this._requestPermission}">请求本地字体权限</button>
          <select name="font-select" id="font-select"></select>
          <label for="font-select">本地字体</label>
          <div class="preview">
            The quick brown fox jumps over the lazy dog. Jackdaws love my big sphinx
            of quartz. Pack my box with five dozen liquor jugs.<br>
            中国 PWA 开发者日
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};l([u("#font-select")],r.prototype,"localfontselector",2);l([u("#preview")],r.prototype,"preview",2);l([u("#btnrequest")],r.prototype,"_btnrequest",2);r=l([f("sample-lfa")],r);export{r as SampleLFA};
//# sourceMappingURL=sample-lfa.6dde1b0c.js.map
