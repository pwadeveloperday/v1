import{s as c,r as l,$ as p,o as C,e as o,n as h}from"./index.27dea3c2.js";var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(t,e,i,a)=>{for(var u=a>1?void 0:a?f(e,i):e,d=t.length-1,n;d>=0;d--)(n=t[d])&&(u=(a?n(e,i,u):n(u))||u);return a&&u&&g(e,i,u),u};let s=class extends c{constructor(){super(),this.description=`
    \u968F\u7740 PWA \u6280\u672F\u5F15\u5165\u4EE5\u53CA\u591A\u79CD Web \u5E73\u53F0\u80FD\u529B\u7684\u589E\u5F3A\uFF0CPWA \u6280\u672F\u7684 Web \u5E94\u7528\u83B7\u5F97\u4E86\u4E0E\u4F20\u7EDF\u672C\u5730\u5E94\u7528\u51E0\u4E4E\u76F8\u540C\u7684\u7528\u6237\u4F53\u9A8C\u5E76\u4E14\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u4E5F\u4FC3\u8FDB\u4E86\u5C0F\u7A0B\u5E8F\u751F\u6001\u7684\u53D1\u5C55\u3002
  `,this.jsondata={name:"PWA Developer Day 2022",t2022:[{id:1,time:"13:00",tag:"",title:"\u5F00\u5E55\u81F4\u8F9E",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B",iconid:"qi",icon:"assets/2022/people/120/qi.png",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"",bilibili:"",aid:"",cid:"",youtube:""}],t2021:[{id:1,tag:"opening",title:"Web \u5F00\u53D1\u7684\u73B0\u72B6\u4E0E\u672A\u6765\uFF08\u5F00\u573A\u4ECB\u7ECD\uFF09",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u8F6F\u4EF6\u4E0E\u5148\u8FDB\u6280\u672F\u4E8B\u4E1A\u90E8 Web \u5E73\u53F0\u5DE5\u7A0B",icon:"",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/02.pdf",bilibili:"https://www.bilibili.com/video/BV1Kv4y1G7L8",aid:"554870624",cid:"741436422",youtube:"https://youtu.be/npMpZHMizUc"}]},this.screenwidth="",this.screenheight=""}screenres(){let e=screen.availWidth-64,i=e*9/16;this.screenwidth=e.toString(),this.screenheight=i.toString()}async connectedCallback(){super.connectedCallback(),this.screenres(),await this.fetchData()}async fetchData(){await fetch("/data.json");const t=await fetch("/data.json");this.jsondata=await t.json()}static get styles(){return l`
      .p2021 {
        padding: 16px 16px;
        background: #62278d;
        background: linear-gradient(to bottom,  rgba(61, 20, 136, 1) 0%, #62278d 80%, #229679 100%);
        color: #fff;
      }

      .p2021 h2 {
        margin: 0;
        padding: 16px 0;
        text-align: center;
      }

      .desc {
        margin: 16px auto;
      }

      fluent-card {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0px;
        box-shadow: none;
        background: rgba(0, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.9);
      }

      fluent-card:hover {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
      }

      fluent-card svg {
        width: 16px;
        fill: rgba(255, 255, 255, 0.9);
      }

      fluent-card:hover svg {
        fill: rgba(255, 255, 255, 1);
      }

      fluent-card h2 {
        font-weight: 600;
        font-size: 1.2rem;
      }

      .resources {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid rgb(243, 243, 243);
        padding-top: 16px;
      }

      .resources {
        margin-top: 16px;
      }

      .bili {
        margin: 16px auto;
        text-align: center;
      }

      iframe {
        max-width: 720px;
        max-height: 480px; 
      }

    `}render(){if(this.jsondata){let t="";for(let e of this.jsondata.t2021){let i="";e.pdf&&(i=`
            <a href="${e.pdf}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z"/></svg>
            </a>
          `),t+=`
          <fluent-card>
            <h2> ${e.title}</h2>
            <div> ${e.des} </div>

            <div class="bili">
              <iframe width="${this.screenwidth}" height="${this.screenheight}" src="https://player.bilibili.com/player.html?cid=${e.cid}&aid=${e.aid}&page=1&as_wide=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            </div>
            <div class="description">
              <div class="nametitle"><strong>${e.speaker}</strong> ${e.pos} ${e.com}</div>
              <div> ${e.bio} </div>
            </div>

            <div class="resources">
              <div>
                <a href="${e.bilibili}" title="${e.title} - ${e.speaker}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>
                </a>
              </div>
              <div>
                ${i}
              </div>
              <div>
                <a href="${e.youtube}" title="${e.title} - ${e.speaker}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </a>
              </div>
            </div>
          </fluent-card>
        `}return p`
        <app-header ?enableBack="${!0}"></app-header>
        <div class="p2021">
          <h2>2021 中国 PWA 开发者日</h2>
          <div class="desc">${this.description}</div>
          <div id="schedule">
            ${C(t)}
          </div>
          <app-footer-home></app-footer-home>
        </div>
      `}else return p`<div>No data</div>`}};r([o({type:String})],s.prototype,"description",2);r([o({type:Object})],s.prototype,"jsondata",2);r([o({type:String})],s.prototype,"screenwidth",2);r([o({type:String})],s.prototype,"screenheight",2);s=r([h("app-2021")],s);export{s as App2021};
//# sourceMappingURL=app-2021.af363306.js.map
