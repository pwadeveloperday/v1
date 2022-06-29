import{s as p,r as m,$ as f,e as d,i as a,n as u}from"./index.1f7d22cf.js";var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,n=(e,t,i,o)=>{for(var l=o>1?void 0:o?v(t,i):t,r=e.length-1,c;r>=0;r--)(c=e[r])&&(l=(o?c(t,i,l):c(l))||l);return o&&l&&h(t,i,l),l};let s=class extends p{constructor(){super(),this.enabled=!1,this.fontMap=new Map}async _showStatus(){if(window.queryLocalFonts)this.enabled=!0,console.log("queryLocalFonts() \u53EF\u7528");else{console.log("queryLocalFonts() \u4E0D\u5B58\u5728"),this.enabled=!1;return}const e=await navigator.permissions.query({name:"local-fonts"});let t;e.state==="granted"?t="\u5DF2\u6388\u4E88\u6743\u9650 \u{1F44D}":e.state==="prompt"?t="\u5C06\u8981\u8BF7\u6C42\u6743\u9650":t="\u6743\u9650\u88AB\u62D2\u7EDD \u{1F44E}",console.log(t),this.elemStatus.innerHTML=t}async _loadFonts(){if(!!this.enabled)try{this._reset();let e;if(e=await window.queryLocalFonts(),e.length===0){this.elemErrorMessage.innerText="\u65E0\u5B57\u4F53\u8FD4\u56DE.";return}this.elemResult.style.display="block",this.elemFontsSelect[0]=new Option("-- \u9009\u62E9\u5B57\u4F53 --",""),e.forEach((t,i)=>{this.fontMap.set(t.postscriptName,t),this.elemFontsSelect[i+1]=new Option(t.fullName,t.postscriptName)})}catch(e){this.elemErrorMessage.innerText=`\u65E0\u6CD5\u679A\u4E3E\u5B57\u4F53: ${e.message}`}finally{this._showStatus()}}_reset(){for(this.fontMap.clear();this.elemFontsSelect.options.length>0;)this.elemFontsSelect.remove(0);this.elemFontInfo.style.display="none",this.elemFontInfoPostscriptName.innerText="",this.elemFontInfoFullName.innerText="",this.elemFontInfoStyle.innerText="",this.elemFontInfoFamily.innerText="",this.elemErrorMessage.innerText=""}async _onFontSelected(){if(this.elemFontsSelect.value==="")return;const e=this.fontMap.get(this.elemFontsSelect.value);if(console.log(e),e){console.log(e.postscriptName),this.elemFontInfoPostscriptName.innerText=`Postscript Name: ${e.postscriptName}`,this.elemFontInfoFullName.innerText=`Full Name: ${e.fullName}`,this.elemFontInfoStyle.innerText=`Style: ${e.style}`,this.elemFontInfoFamily.innerText=`Family: ${e.family}`,this.elemFontInfoOutlineFormat.innerText=`Outline Format: ${await this._getFormat(e)}`,this.elemFontInfo.style.fontFamily="dynamic-font",this.elemFontInfo.style.display="block";let t=document.querySelector("#df");t&&t.remove();let i=`
      @font-face {
        font-family: "dynamic-font";
        src: local("${e.postscriptName}");
      }`,o=document.createElement("style");o.id="df",o.type="text/css",o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i)),document.querySelectorAll("head")[0].appendChild(o)}else this.elemErrorMessage.innerText="Unable to load font data"}async _getFormat(e){const t=await e.blob(),i=new TextDecoder().decode(await t.slice(0,4).arrayBuffer());let o="UNKNOWN";switch(i){case"\0\0\0":case"true":case"typ1":o="truetype";break;case"OTTO":o="cff";break}return o}async connectedCallback(){super.connectedCallback(),await this._showStatus()}static get styles(){return m`
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

    #status {
      display: inline;
    }

    #result {
      display: none;
    }

    .previewv {
      margin: 16px auto;
      text-align: center;
      writing-mode:vertical-rl;
      letter-spacing: 4px;
      font-size: 1.5rem;
    }

    .previewv h2, .previewv h3 {
      margin: 16px auto;
    }

    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);;
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
      display: block;
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 113, 197, 0.9);
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
      margin: 0 4px;
      display: inline-block;
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

    `}render(){return f`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/sample">示例</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>本地字体访问 API (Local Font Access API)</h2>
        <fluent-card>
          <div class="content">
            <div>
              <div class="status">
                状态: <div id="status"></div>
              </div>
              <div class="q">
              <button class="button" @click="${this._loadFonts}">
                枚举本地字体
              </button>
              <select class="select" id="fonts-select" @change="${this._onFontSelected}">
              </select>
              <!--
              <span>with optional filter</span>
              <input class="input" type="text" id="filter-input" placeholder="Type in font names separated by comma(s)...">
              -->
              </div>     
            </div>
            <div id="error-message" class="error"></div>
            <div id="result" class="result">
              <div id="font-info" class="font-info">
                <div id="font-info-postscript-name" class="font-info-item"></div>
                <div id="font-info-full-name" class="font-info-item"></div>
                <div id="font-info-style" class="font-info-item"></div>
                <div id="font-info-family" class="font-info-item"></div>
                <div id="font-info-outline-format" class="font-info-item"></div>
                <div class="previewv">
                  <h3>滕王阁序</h3>
                  <h4>王勃</h4>
                  <div>
                    落霞与孤鹜齐飞，<br>秋水共长天一色。
                  </div>  
                </div>
                <div class="preview">
                  <h3>中国 PWA 开发者日 - PWA 的特点</h3>
                  <div>
                    可发现 (Discoverable) 
                    可安装 (Installable) 
                    可链接 (Linkable) 
                    独立于网络 (Network independent) 
                    渐进式 (Progressive) 
                    可重入 (Re-engageable) 
                    响应式 (Responsive) 
                    安全 (Safe) 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fluent-card>
        <fluent-card>
          启用 chrome://flags/#font-access
        </fluent-card>
        <fluent-card id="st">
          <div class="w3c"><icon-w3c></icon-w3c> <a href="https://wicg.github.io/local-font-access/" title="Local Font Access API">Local Font Access API</a></div>
          <div class="imp">
            <icon-chr class="yes"></icon-chr>
            <icon-edg class="yes"></icon-edg> <icon-ope class="yes"></icon-ope> <icon-viv class="yes"></icon-viv>
            <a href="https://chromestatus.com/feature/6234451761692672">M103</a>
            <icon-saf class="no"></icon-saf> <icon-fir class="no"></icon-fir>
            <div class="des">
              <div class="cate">
                <icon-des class="yes"></icon-des> 
              </div>
              <div class="det">
                <icon-mac class="yes"></icon-mac> <icon-win class="yes"></icon-win> <icon-lin class="yes"></icon-lin> 
              </div>
            </div>
            <div class="des">
              <div class="cate">   
                <icon-mob class="no"></icon-mob>
              </div>
              <div class="det">
                <icon-and class="no"></icon-and> <icon-ios class="no"></icon-ios>
              </div>
            </div>    
          </div>
        </fluent-card>
        <app-footer></app-footer>
      </div>
    `}};n([d({type:Boolean})],s.prototype,"enabled",2);n([a("#status")],s.prototype,"elemStatus",2);n([a("#result")],s.prototype,"elemResult",2);n([a("#fonts-select")],s.prototype,"elemFontsSelect",2);n([a("#error-message")],s.prototype,"elemErrorMessage",2);n([a("#font-info")],s.prototype,"elemFontInfo",2);n([a("#font-info-postscript-name")],s.prototype,"elemFontInfoPostscriptName",2);n([a("#font-info-full-name")],s.prototype,"elemFontInfoFullName",2);n([a("#font-info-style")],s.prototype,"elemFontInfoStyle",2);n([a("#font-info-family")],s.prototype,"elemFontInfoFamily",2);n([a("#font-info-outline-format")],s.prototype,"elemFontInfoOutlineFormat",2);n([d({type:Map})],s.prototype,"fontMap",2);s=n([u("sample-lfa")],s);export{s as SampleLFA};
//# sourceMappingURL=sample-lfa.a25c3cef.js.map
