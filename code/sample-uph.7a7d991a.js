import{s as h,r as m,$ as g,i as n,n as b}from"./index.cde59b63.js";var c=Object.freeze,p=Object.defineProperty,v=Object.getOwnPropertyDescriptor,i=(e,a,s,u)=>{for(var o=u>1?void 0:u?v(a,s):a,r=e.length-1,l;r>=0;r--)(l=e[r])&&(o=(u?l(a,s,o):l(o))||o);return u&&o&&p(a,s,o),o},f=(e,a)=>c(p(e,"raw",{value:c(a||e.slice())})),d;let t=class extends h{constructor(){super()}async _showUrlParameters(){const e=location.search;if(console.log(e),e.trim()){this._msg.innerHTML=`
        search: ${e}, \u6210\u529F\u8C03\u7528
      `;let a=e.split("://")[1],r=(await(await fetch(`https://restapi.amap.com/v3/geocode/geo?address=${a}&output=JSON&key=39a5a5f5239a28b739e6a79381afb97e`)).json()).geocodes[0].location;this._geolocation.innerHTML=r;const l=await fetch(`https://restapi.amap.com/v3/staticmap?location=${r}&zoom=10&size=375*250&markers=mid,,A:${r}&key=39a5a5f5239a28b739e6a79381afb97e`);this._map.innerHTML=`<img src="${l}">`}else this._msg.innerHTML="\u65E0 web+pwadev://* \u8C03\u7528"}_updateUph(){let e=`web+pwadev://${this._iuph.value}`;this._uph.innerHTML=e,this._uph.href=e}async connectedCallback(){super.connectedCallback(),setTimeout(()=>{this._showUrlParameters()},3e3)}static get styles(){return m`
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

    #container {
      height: 60vw;
    }

    fluent-card h3 {
      font-weight: 400;
    }

    `}render(){return g(d||(d=f([`
      <app-header ?enableBack="`,`"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">\u9996\u9875</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">\u793A\u4F8B</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>URL \u534F\u8BAE\u5904\u7406 (URL protocol handler)</h2>
        <fluent-card class="act">
        \u4F7F\u7528\u7279\u5B9A\u534F\u8BAE\u7684\u94FE\u63A5\u8C03\u7528\u5DF2\u5B89\u88C5\u7684 PWA\uFF0C\u83B7\u5F97\u66F4\u96C6\u6210\u7684\u4F53\u9A8C\u3002
          <ul>
            <li>\u8BBF\u95EE <a href="https://pwadev.io">https://pwadev.io</a></li>
            <li>\u5B89\u88C5\u4E3A\u672C\u5730 PWA \u5E94\u7528</li>
            <li>\u56DE\u5230\u6D4F\u89C8\u5668\uFF0C\u8BBF\u95EE <a href="https://pwadev.io/sample/url-protocol-handler">https://pwadev.io/sample/url-protocol-handler</a> </li>
            <li>\u70B9\u51FB <a href="web+pwadev://\u5317\u4EAC\u5E02\u897F\u57CE\u533A\u666F\u5C71\u897F\u885744\u53F7" id="uph">web+pwadev://\u5317\u4EAC\u5E02\u897F\u57CE\u533A\u666F\u5C71\u897F\u885744\u53F7</a></li>
            <li>\u81EA\u52A8\u542F\u52A8 "\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5"</li>
            <li>\u663E\u793A\u6D4F\u89C8\u5668\u4E2D\u67E5\u8BE2\u7684\u5730\u5740\u7ECF\u7EAC\u5EA6\u53CA\u5730\u56FE</li>
          </ul>
          <h3>\u7ECF\u7EAC\u5EA6\u53CA\u5730\u56FE\u67E5\u8BE2</h3>
          <input id="iuph" value="\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u8FCE\u5BBE\u5927\u90536000\u53F7" size="20"> <input type="button" value="\u66F4\u65B0URL" @click="`,`">

          <div id="msg"></div>
          <div id="geolocation"></div>
          <div id="map"></div>
        </fluent-card>
        <div id="container"></div>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/url-protocol-handler/" title="URL protocol handler registration for PWAs">
              \u6559\u7A0B\uFF1A\u6CE8\u518C PWA \u7684 URL \u534F\u8BAE
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://pr-preview.s3.amazonaws.com/w3c/manifest/pull/972.html#protocol_handlers-member" title="Web Application Manifest: URL Protocol Handler">Web Application Manifest: URL Protocol Handler</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5151703944921088" title="\u5728 Chromium 96 \u7248\u672C\u652F\u6301">\u{1F421} M96</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome \u6D4F\u89C8\u5668"></icon-chr>
              <icon-edg class="yes" title="\u5FAE\u8F6F Edge \u6D4F\u89C8\u5668"></icon-edg> <icon-ope class="yes" title="Opera \u6D4F\u89C8\u5668"></icon-ope> <icon-viv class="yes" title="Vivaldi \u6D4F\u89C8\u5668"></icon-viv>
              <icon-saf class="no" title="Apple Safari \u6D4F\u89C8\u5668"></icon-saf> <icon-fir class="no" title="Mozilla Firefox \u6D4F\u89C8\u5668"></icon-fir>
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
      <script type="text/javascript">
 
      <\/script> 
    `])),!0,this._updateUph)}};i([n("#msg")],t.prototype,"_msg",2);i([n("#container")],t.prototype,"_container",2);i([n("#uph")],t.prototype,"_uph",2);i([n("#iuph")],t.prototype,"_iuph",2);i([n("#geolocation")],t.prototype,"_geolocation",2);i([n("#map")],t.prototype,"_map",2);t=i([b("sample-uph")],t);export{t as SampleUPH};
//# sourceMappingURL=sample-uph.7a7d991a.js.map
