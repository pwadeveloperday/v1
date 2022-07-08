import{s as l,r as p,$ as u,i as d,e as g,n as m}from"./index.a5c2a44e.js";var b=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c=(o,t,i,a)=>{for(var e=a>1?void 0:a?h(t,i):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(e=(a?s(t,i,e):s(e))||e);return a&&e&&b(t,i,e),e};let r=class extends l{constructor(){super()}async _bc(){if(!("BarcodeDetector"in window)||!(await BarcodeDetector.getSupportedFormats()).includes("qr_code")){this._msg.innerHTML="\u6D4F\u89C8\u5668\u5728\u8BE5\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E8C\u7EF4\u7801\u68C0\u6D4B";return}else{const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:!1});if(this._stream.srcObject=o,await this._stream.play(),this._stream)try{let t=this._stream,a=await new BarcodeDetector({formats:"qr_code"}).detect(t);this._msg.innerHTML=a.map(e=>e.rawValue)}catch(t){this._msg.innerHTML=t.message}}}async _pausec(){this._stream.pause()}async connectedCallback(){super.connectedCallback()}static get styles(){return p`
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
      cursor: pointer;
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .act a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    #show {
      display: none;
    }

    .act div {
      background-color: rgba(0, 0, 0, 0.02);
      padding: 8px 16px;
    }

    #stream {
      width: 320px;
    }

    .center {
      margin: 0px auto;
      text-align: center;
      background: transparent !important;
    }

    .center button {
      margin-top: 16px;
    }

    `}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>形状检测 (Shape Detection) API</h2>
        形状检测 API 检测图像中的人脸、条形码和文本<br><br>
        <fluent-card class="act">
          <div class="center">
            <video id="stream" muted autoplay></video><br>
            <button @click="${this._bc}">扫码二维码</button>
            <button @click="${this._pausec}">暂停</button>
          </div>
          <div id="msg"></div>
        </fluent-card>
        <fluent-card>
          启用 chrome://flags#enable-experimental-web-platform-features
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/shape-detection/" title="The Shape Detection API: a picture is worth a thousand words, faces, and barcodes">
              教程：形状检测 API
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://wicg.github.io/shape-detection-api/" title="Accelerated Shape Detection in Images">Accelerated Shape Detection in Images</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/4757990523535360" title="在 Chromium 83 版本支持">🐡 M83</a>
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
                <icon-mac class="yes" title="Mac"></icon-mac> <icon-win class="no" title="Windows"></icon-win> <icon-lin class="no" title="Linux"></icon-lin> 
              </div>
              <div class="det">
                <icon-and class="yes" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};c([d("#stream")],r.prototype,"_stream",2);c([d("#msg")],r.prototype,"_msg",2);c([g({type:Function})],r.prototype,"interval",2);r=c([m("sample-sd")],r);export{r as SampleSD};
//# sourceMappingURL=sample-sd.12f882c0.js.map
