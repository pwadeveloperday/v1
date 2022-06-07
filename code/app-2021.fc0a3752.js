import{s as n,r as v,$ as i,e as c,n as h}from"./index.c8d51b44.js";var l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,p=(a,u,t,C)=>{for(var e=C>1?void 0:C?o(u,t):u,r=a.length-1,d;r>=0;r--)(d=a[r])&&(e=(C?d(u,t,e):d(e))||e);return C&&e&&l(u,t,e),e};let s=class extends n{constructor(){super(),this.description=`
    \u968F\u7740 PWA \u6280\u672F\u5F15\u5165\u4EE5\u53CA\u591A\u79CD Web \u5E73\u53F0\u80FD\u529B\u7684\u589E\u5F3A\uFF0CPWA \u6280\u672F\u7684 Web \u5E94\u7528\u83B7\u5F97\u4E86\u4E0E\u4F20\u7EDF\u672C\u5730\u5E94\u7528\u51E0\u4E4E\u76F8\u540C\u7684\u7528\u6237\u4F53\u9A8C\u5E76\u4E14\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u4E5F\u4FC3\u8FDB\u4E86\u5C0F\u7A0B\u5E8F\u751F\u6001\u7684\u53D1\u5C55\u3002
  `}static get styles(){return v`
      .p2021 {
        padding: 0 16px;
      }

      fluent-card {
        padding: 1rem;
        margin-bottom: 1rem;
      }

      fluent-card svg {
        width: 16px;
      }

      fluent-card h2 {
        font-weight: 600;
        font-size: 1rem;
      }
    `}render(){return i`
      <app-header ?enableBack="${!0}"></app-header>
      <app-nav></app-nav>
      <div class="p2021">

      <fluent-card> ${this.description} </fluent-card>

      <div id="schedule">
        <fluent-card>
          <h2>Web 开发的现状与未来（开场介绍） - 张琦 </h2>
          不识PWA的Web程序员,便称英雄也枉然！渐进式网页应用(Progressive Web Application)技术的诞生让网页程序提供比拟原生应用的用户体验和功能，随着“瞬时应用安装”，“离线工作模式”，“本地文件访问”，“高性能WebAssembly”等新能力逐步引入，PWA正在在技术演进的路上狂飙。
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"/></svg>
            <a href="https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/01.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z"/></svg>
            </a>
          </div>
        </fluent-card>
        <fluent-card>
          <h2>PWA 在阿里巴巴交易履约业务中的实践 - 林燕燕 </h2>
          林燕燕，花名书呆，阿里巴巴 ICBU 事业部·高级前端工程师。有比较丰富的中后台及 H5 开发经验，喜欢研究业务和用技术解决业务问题。
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"/></svg>
            <a href="https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/02.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z"/></svg>
            </a>
          </div>
        </fluent-card>
        <fluent-card>
          <h2>对构建面向未来的网络应用程序的探索 - 陆远 </h2>
          陆远，专注 Web、PWA，目前负责鼎道智联 PWA Runtime 系统及相关生态方向的研发。
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"/></svg>
            <a href="https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/03.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z"/></svg>
            </a>
          </div>
        </fluent-card>
        <fluent-card>
          <h2>Progressively build your PWA - 丛慧君 </h2>
          丛慧君，谷歌中国的 Web 生态系统顾问，目前负责大中华区 Web 技术的推广及 Chrome/Web 产品的生态领域合作。
          </fluent-card>
        <fluent-card> 
        <h2>当操作系统遇上 PWA - Diego González </h2>
        Diego González，来自微软Edge，在哥斯达黎加从事PWA工作。
        </fluent-card>
        <fluent-card> <h2>PWAs 的过去、现在和未来 - 元凯宁 </h2>
        元凯宁，原 Intel 软件和先进技术事业部、网络平台高级软件工程师，自2010年开始一直进行Web技术的研究和开发，曾跻身于Chromium浏览器及其衍生的Web Runtime、Web IDE、Node.js等多种技术和平台，贡献有多项产品和专利。</fluent-card>
        <fluent-card> <h2>基于 Web 内核的微信小程序框架实践 - 陈博学 </h2>
        陈博学,来自腾讯，微信小程序跨平台框架负责人，chromium和webkit内核爱好者。
        </fluent-card>
      </div>

      </div>

      <app-footer></app-footer>
    `}};p([c({type:String})],s.prototype,"description",2);s=p([h("app-2021")],s);export{s as App2021};
//# sourceMappingURL=app-2021.fc0a3752.js.map
