import{s as l,r as p,$ as g,i as a,n as b}from"./index.b442bc5f.js";var v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,o=(r,e,s,n)=>{for(var t=n>1?void 0:n?m(e,s):e,c=r.length-1,d;c>=0;c--)(d=r[c])&&(t=(n?d(e,s,t):d(t))||t);return n&&t&&v(e,s,t),t};let i=class extends l{constructor(){super()}_accelerometer(){let r=null;try{r=new Accelerometer({frequency:60}),r.onerror=e=>{e.error.name==="NotAllowedError"?this._a.innerHTML="Permission to access sensor was denied.":e.error.name==="NotReadableError"&&(this._a.innerHTML="Cannot connect to the sensor.")},r.onreading=e=>{this._a.innerHTML=e},r.addEventListener("reading",()=>{this._a.innerHTML=`
          Acceleration along the X-axis ${r.x} <br>
          Acceleration along the Y-axis ${r.y} <br>
          Acceleration along the Z-axis ${r.z} <br>
        `}),r.start()}catch(e){if(e.name==="SecurityError")this._a.innerHTML="Sensor construction was blocked by the Permissions Policy.";else if(e.name==="ReferenceError")this._a.innerHTML="Sensor is not supported by the User Agent.";else throw e}}_ambientlightsensor(){if("AmbientLightSensor"in window){const r=new AmbientLightSensor;r.addEventListener("reading",e=>{this._als.innerHTML="Current light level:",r.illuminance}),r.addEventListener("error",e=>{this._als.innerHTML=e.error.name,e.error.message}),r.start()}}async connectedCallback(){super.connectedCallback()}static get styles(){return p`
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
      text-align: left;
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

    .act div div {
      background-color: rgba(0, 0, 0, 0.02);
      padding: 8px 16px;
    }

    `}render(){return g`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>通用传感器 (Generic Sensor) API</h2>
        <fluent-card class="act">
          <div id="a">
            加速度计 (Accelerometer)
            <a @click="${this._accelerometer}">启用</a>
            <div></div>
          </div>
          <div id="g">
            陀螺仪 (Gyroscope)
            <div></div>
          </div>
          <div id="as">
            线性加速度传感器 (Linear Acceleration Sensor)
            <div></div>
          </div>
          <div id="os">
            方向传感器 (Orientation Sensor)
            <div></div>
          </div>
          <div id="gs">
            重力感应器 (Gravity Sensor)
            <div></div>
          </div>
          <div id="als">
            环境光传感器 (Ambient Light Sensor)
            <a @click="${this._ambientlightsensor}">启用</a>
            <div></div>
          </div>
          <div id="m">
            磁力计 (Magnetometer)
            <div></div>
          </div>
        </fluent-card>

        <fluent-card>
          环境光传感器及磁力计需启用 chrome://flags#enable-generic-sensor-extra-classes
        </fluent-card> 

        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/generic-sensor/" title="Sensors for the web">
              教程：Web 传感器
            </a>
          </div>
          <div class="w3c">
            <icon-w3c class="w3clogo"></icon-w3c> <a href="https://www.w3.org/TR/generic-sensor/" title="Generic Sensor">Generic Sensor</a><br>
            <icon-w3c class="w3clogo"></icon-w3c> <a href="https://w3c.github.io/ambient-light/" title="Ambient Light Sensor">Ambient Light Sensor</a><br>
          </div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5298357018820608" title="在 Chromium 63 版本支持">🐡 M63</a>
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
                <icon-and class="yes" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};o([a("#a div")],i.prototype,"_a",2);o([a("#g div")],i.prototype,"_g",2);o([a("#as div")],i.prototype,"_as",2);o([a("#os div")],i.prototype,"_os",2);o([a("#gs div")],i.prototype,"_gs",2);o([a("#als div")],i.prototype,"_als",2);o([a("#m div")],i.prototype,"_m",2);i=o([b("sample-gs")],i);export{i as SampleGS};
//# sourceMappingURL=sample-gs.0bec8ce2.js.map
