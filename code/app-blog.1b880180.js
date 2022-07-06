import{s as n,r as p,$ as d,o as c,e as g,n as b}from"./index.ae76d2c0.js";var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s=(a,e,u,r)=>{for(var t=r>1?void 0:r?f(e,u):e,o=a.length-1,i;o>=0;o--)(i=a[o])&&(t=(r?i(e,u,t):i(t))||t);return r&&t&&h(e,u,t),t};let l=class extends n{constructor(){super(),this.jsondata={name:"blog",blog:[{id:1,path:"/china-pwa-developer-day-2022",title:"\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",des:"\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u5C06\u4E8E 2022 \u5E74 8 \u6708 6 \u65E5\u7EBF\u4E0A\u4E3E\u884C\u3002",author:"\u5F20\u654F (Belem Zhang)",pos:"\u8F6F\u4EF6\u6280\u672F\u7ECF\u7406",com:"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B",iconid:"belem",icon:"assets/2022/people/120/belem.png",icon5:"assets/2022/people/500/belem.png",bio:"\u5F20\u654F\uFF0C\u53C2\u4E0E\u4E86 Crosswork\u3001<a href='https://webnn.dev/' target='_blank'>Web Neural Network (WebNN)</a>\u3001\u6E10\u8FDB\u5F0F Web \u5E94\u7528 \uFF08PWA\uFF09\u7B49 Web \u9879\u76EE\u3002 \u5728 2013 \u5E74\u4E4B\u524D\uFF0C\u4ED6\u662F Opera Software \u7684\u8F6F\u4EF6\u5DE5\u7A0B\u7ECF\u7406\u5E76\u9886\u5BFC\u4E86\u5BA2\u6237\u7AEF\u8FD0\u8425\u548C\u5173\u952E\u6570\u636E\u4EA7\u54C1\u56E2\u961F\u3002 \u5F20\u654F\u5728\u6D4F\u89C8\u5668\u4EA7\u54C1\u53CA\u8D28\u91CF\u3001\u7F51\u7AD9\u517C\u5BB9\u6027\u3001Web API \u53CA\u5E94\u7528\u7B49\u65B9\u9762\u6709\u591A\u5E74\u7ECF\u9A8C\uFF0C\u5F20\u654F\u6B63\u548C\u56E2\u961F\u52AA\u529B\u5C06\u82F1\u7279\u5C14 XPU \u7684\u5F3A\u5927\u529F\u80FD\u5F15\u5165\u5230 Web\uFF0C\u5E76\u4E0E Web \u793E\u533A\u643A\u624B\u63A8\u52A8 PWA \u6280\u672F\u5728\u56FD\u5185\u7684\u53D1\u5C55\u548C\u843D\u5730\u3002",date:"2022-08-06"}]}}static get styles(){return p`
    .about {
      padding: 0 16px;
      margin: 2rem 0px 0rem;
      min-height: calc(100vh - 174px);
    }

    h2 {
      margin: 0;
      padding: 16px 0;
      text-align: center;
      color: rgba(0, 113, 197, 0.9);
    }

    .desc {
      margin: 16px 16px 32px 16px;
      text-align: center;
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

    .control[href]:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    a svg {
      width: 16px;
      height: 16px;
      margin-bottom: -2px;
      fill: rgba(0, 113, 197, 0.9);
    }

    fluent-card ul {
      list-style-type: circle;
      margin-left: -32px;
    }

    fluent-card ul li {
      display: block;
      margin: 8px auto;
      padding-left: 8px;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
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

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }

    
    .time, .topic {
      padding: 0 4px;
      display: flex;
      flex-direction: column;
    }

    .title {
      font-weight: 500;
      font-size: clamp(20px, 3vw, 28px);
      color: rgba(0,113,197, 0.9);
    }

    fluent-card:hover .title {
      color: rgba(0,113,197, 1);
    }

    .details {
      display: flex;
      margin-top: 32px;
    }

    .article {
      font-size: 13px;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.2);
      letter-spacing: 1px;
      margin: 16px auto;
    }

    .article img {
      display:block;
      margin: 8px auto;
      text-align: center;
      max-width: 50vw;
    }

    .article code {
      display: block;
      margin: 16px;
      padding: 16px;
      border: 1px solid rgba(0, 113, 197, 0.1);
      font-family: monospace;
    }

    .article code span {
      margin-left: 32px;
    }

    .bio {
      margin: 16px auto;
      padding: 16px;
      font-size: 13px;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.2);
    }

    .des:hover, .bio:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    .avatar {
      width: 60px;
      height: 60px;
      background-size: 60px 60px;
      margin-right: 10px;
      border: 4px solid hsl(100 100% 60%);
      border-radius: 50px;
    }

    .description {
      align-self: center;
    }

    .team {
      font-size: 13px;
    }


    #icon_belem {
      background-image: url('assets/2022/people/120/belem.png');
    }

    #icon_wanming {
      background-image: url('assets/2022/people/120/wanming.png');
    }

    a {
      color: rgba(0, 113, 197, 0.9);
      cursor: pointer;
      text-decoration: none;
    }

    a:hover {
      color: rgba(0, 113, 197, 1);
    }

    fluent-card a {
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    fluent-card a:hover {
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    `}_getpath(){let a=location.pathname.replace("/blog/","");return a=a.replace("/blog",""),console.log(a.trim()),a.trim()}async fetchData(){const a=await fetch("/blog.json");this.jsondata=await a.json()}async connectedCallback(){super.connectedCallback(),await this._getpath(),await this.fetchData()}render(){if(this.jsondata){let a="";if(this._getpath()){for(let e of this.jsondata.blog)if(this._getpath()===e.path){let u=e.des.replace(/\n/g,"<br>");a+=`
              <fluent-card id="id_${e.id}" class="ids">
                <div class="title">${e.title}</div>
                <div class="date">${e.date}</div>
                <div class="article">
                  ${u}
                </div>
                <div class="details">
                  <div class="avatar" id="icon_${e.iconid}"></div>
                  <div class="description">
                    <div class="nametitle">${e.author}</div>
                    <div class="team">${e.pos}</div>
                    <div class="team">${e.com}</div>
                  </div>
                </div>
              </fluent-card>
            `}}else for(let e of this.jsondata.blog){let u=e.des.replace(/\n/g,"<br>");u=u.split("<!-- summary -->")[0],a+=`
            <fluent-card id="id_${e.id}" class="ids">
              <div class="title">
                <a href="/blog/${e.path}">${e.title}</a>
              </div>
              <div class="article">
                ${u}
              </div>
            </fluent-card>
          `}return d`
        <app-header ?enableBack="${!0}"></app-header>
        <div class="about">
          <h2><a href="/blog" title="博客">Blog</a></h2>
          <div class="desc">为您准备的关于 PWA 及 Fugu API 的更新和故事</div>
          <div id="schedule">
            ${c(a)}
          </div>
        </div>
        <app-footer></app-footer>
      `}else return d`<app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <h2>Blog</h2>
        <div class="desc">为您准备的关于 PWA 及 Fugu API 的更新和故事</div>
        <fluent-card>
        </fluent-card>
      </div>
      <app-footer></app-footer>`}};s([g({type:Object})],l.prototype,"jsondata",2);l=s([b("app-blog")],l);export{l as AppBlog};
//# sourceMappingURL=app-blog.1b880180.js.map
