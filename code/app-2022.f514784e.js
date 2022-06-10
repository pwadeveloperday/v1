import{s as l,r as c,$ as n,o as g,e as s,n as h}from"./index.e844b11a.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,a=(t,e,r,o)=>{for(var i=o>1?void 0:o?m(e,r):e,p=t.length-1,d;p>=0;p--)(d=t[p])&&(i=(o?d(e,r,i):d(i))||i);return o&&i&&b(e,r,i),i};let u=class extends l{constructor(){super(),this.subtitle="\u7B2C\u4E8C\u5C4A",this.title="\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",this.time="2022 \u5E74 8 \u6708 6 \u65E5 13:00 - 17:00",this.description=`
    \u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u4E0E\u82F1\u7279\u5C14\u643A\u624B\u4E3E\u529E\u201C\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u201D\u3002
    \u672C\u6B21\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002
    
    \u671F\u5F85\u4E0E\u60A8\u7EBF\u4E0A\u76F8\u805A\u3002
    `,this.jsondata={name:"PWA Developer Day 2022",t2022:[{id:1,time:"13:00",tag:"",title:"\u5F00\u5E55\u81F4\u8F9E",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B",iconid:"qi",icon:"assets/2022/people/120/qi.png",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"",bilibili:"",aid:"",cid:"",youtube:""}],t2021:[{id:1,tag:"opening",title:"Web \u5F00\u53D1\u7684\u73B0\u72B6\u4E0E\u672A\u6765\uFF08\u5F00\u573A\u4ECB\u7ECD\uFF09",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u8F6F\u4EF6\u4E0E\u5148\u8FDB\u6280\u672F\u4E8B\u4E1A\u90E8 Web \u5E73\u53F0\u5DE5\u7A0B",icon:"",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/02.pdf",bilibili:"https://www.bilibili.com/video/BV1Kv4y1G7L8",aid:"554870624",cid:"741436422",youtube:"https://youtu.be/npMpZHMizUc"}]}}async connectedCallback(){super.connectedCallback(),await this.fetchData()}async fetchData(){await fetch("/data.json");const t=await fetch("/data.json");this.jsondata=await t.json()}static get styles(){return c`
    .p2022 {
      background: #62278d;
      background: linear-gradient(to bottom,  rgba(61, 20, 136, 1) 0%, #62278d 80%, #229679 100%);
      color: #fff;
    }

      pwa-install {
        position: fixed;
        bottom: 16px;
        right: 16px;
        --install-button-color: transparent;
      }

      pwa-install:hover {
        border: 2px solid #fff;
        border-radius: 50% 50%;
      }

      #openButton:hover {
        background: rgba(61, 20, 136, 0.8);
      }

      pwa-install svg {
        fill: #fff;
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      .hero {
        padding: 3rem 0;
        text-align: center;
        text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.4);
      }

      .hero h1 {
        margin: 2rem;
        font-size: clamp(36px, 6vw, 82px);
        letter-spacing: 4px;
        line-height: 1.2;
        font-weight: 900;
      }

      .hero .h1b {
        margin-top: -2rem;
      }

      .hero h2 {
        margin: 0px;
        font-size: clamp(26px, 4vw, 44px);
        letter-spacing: 4px;
      }
      .hero h3 {
        margin: 0rem auto;
        font-size: clamp(20px, 3vw, 28px);
        letter-spacing: 2px;
      }

      #schedule, .box {
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 0px;
        margin-bottom: 16px;
      }

      fluent-card {
        padding: 1rem;
        color: #fff;
        border: 0px;
        border-radius: 0px;
        background: transparent;
        box-shadow: none;
      }

      fluent-card:hover {
        background: rgba(0, 0, 0, 0.4);
      }

      #schedule fluent-card {
        display: flex;
        align-items: center;
      }

      fluent-card {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      fluent-card:last-child {
        border-bottom:0px;
      }

      @media (min-width: 1024px) {
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media (prefers-color-scheme: light) {
      }

      @media (prefers-color-scheme: dark) {
      }

      :host {
        --install-button-color: #3d1488;
      }

      .time, .divider, .topic {
        padding: 0 4px;
      }

      .divider {
        margin: 0px;
      }

      .divider svg {
        width: 20px;
        height: 20px;
        fill: rgba(255, 255, 255, 0.9);
        margin-bottom:-5px;
      }

      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
      }

      .details {
        display: flex;
        margin-top: 8px;
      }

      .des {
        margin: 16px auto;
        font-size: 12px;
        letter-spacing: 2px;
      }

      .avatar_ {
        border: 5px solid hsl(100 100% 60%);
        border-image-slice: 1;
        border-image-source: conic-gradient(
          from var(--startDeg, 0deg),
          hsl(100 100% 60%), 
          hsl(200 100% 60%),
          hsl(100 100% 60%)
        );
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
        font-size: 12px;
      }

      #icon_qi {
        background-image: url('assets/2022/people/120/qi.png');
      }
      #icon_alex {
        background-image: url('assets/2022/people/120/alex.png');
      }
      #icon_harry {
        background-image: url('assets/2022/people/120/harry.png');
      }
      #icon_edwin {
        background-image: url('assets/2022/people/120/edwin.png');
      }
      #icon_belem {
        background-image: url('assets/2022/people/120/belem.png');
      }

      .p2022 {
        padding: 16px;
      }
     `}async firstUpdated(){console.log("\u6B22\u8FCE\u60A8!")}render(){if(this.jsondata){let t="";for(let e of this.jsondata.t2022)t+=`
          <fluent-card>
            <div class="time">${e.time}</div>
            <div class="divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>  
            </div>
            <div class="topic">
              <div class="title">${e.title}</div>
              <div class="des">${e.des.replace(/\n/g,"<br>")}</div>
              <div class="details">
                <div class="avatar" id="icon_${e.iconid}"></div>
                <div class="description">
                  <div class="nametitle">${e.speaker} / ${e.pos}</div>
                  <div class="team">${e.com}</div>
                </div>
              </div>
            </div>
          </fluent-card>
        `;return n`
        <app-header ?enableBack="${!0}"></app-header>
        <div class="p2022">
          <div class="hero">
            <h3>${this.subtitle}</h3>
            <h2>${this.title}</h2>
            <h3 class="h3b">${this.time}</h3>
          </div>
          <fluent-card class="box"> ${this.description} </fluent-card>

          <div id="schedule">
            ${g(t)}
          </div>
          <pwa-install title="安装 中国 PWA 开发者日">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
              />
            </svg>
          </pwa-install>

          <app-footer-home></app-footer-home>
        </div>
      `}else return n`<div>No data</div>`}};a([s({type:String})],u.prototype,"subtitle",2);a([s({type:String})],u.prototype,"title",2);a([s({type:String})],u.prototype,"time",2);a([s({type:String})],u.prototype,"description",2);a([s({type:Object})],u.prototype,"jsondata",2);u=a([h("app-2022")],u);export{u as App2022};
//# sourceMappingURL=app-2022.f514784e.js.map
