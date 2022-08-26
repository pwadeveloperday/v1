import{s as u,r as g,$ as d,o as c,e as l,n as h}from"./index.b5c802cd.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,n=(i,a,r,e)=>{for(var t=e>1?void 0:e?m(a,r):a,o=i.length-1,p;o>=0;o--)(p=i[o])&&(t=(e?p(a,r,t):p(t))||t);return e&&t&&b(a,r,t),t};let s=class extends u{constructor(){super(),this.subtitle="\u7B2C\u4E8C\u5C4A",this.title="\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",this.time="8 \u6708 6 \u65E5 (\u5468\u516D) 09:00 - 17:00",this.description=`
    \u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u3001\u82F1\u7279\u5C14\u4E0E\u8C37\u6B4C\u643A\u624B\u4E3E\u529E\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u6D3B\u52A8\u3002
    \u672C\u6B21\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u4EE5\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002
    
    \u671F\u5F85\u4E0E\u60A8\u7EBF\u4E0A\u76F8\u805A\u3002
    `,this.jsondata={name:"PWA Developer Day 2022",t2022:[{id:1,time:"13:00",tag:"",path:"opening",title:"\u5F00\u5E55\u81F4\u8F9E",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B",iconid:"qi",icon:"assets/2022/people/120/qi.png",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"",bilibili:"https://www.bilibili.com/video/BV1Kv4y1G7L8",aid:"554870624",cid:"741436422",youtube:"https://youtu.be/npMpZHMizUc"}]},this.screenwidth="",this.screenheight=""}screenres(){let a=screen.availWidth-32,r=a*9/16;this.screenwidth=a.toString(),this.screenheight=r.toString()}_getpath(){console.log(location.pathname);let i=location.pathname.replace("/2022/","");return i=i.replace("/2022",""),console.log(i.trim()),i.trim()}async fetchData(){const i=await fetch("/assets/data/data.json");this.jsondata=await i.json()}async connectedCallback(){super.connectedCallback(),this.screenres(),await this._getpath(),await this.fetchData()}static get styles(){return g`
      .section {
        color: #3d3d3d;
      }

      pwa-install {
        position: fixed;
        bottom: 16px;
        right: 16px;
        --install-button-color: transparent;
      }

      pwa-install:hover {
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 50% 50%;
      }

      #openButton:hover {
        background: rgba(0,113,197, 0.8);
      }

      pwa-install svg {
        fill: rgba(255, 255, 255, 0.95);
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      .hero {
        margin-top: -6rem;
        padding: 0rem 0px 6rem;
        text-align: center;
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

      .hero h2, .hero h3 {
        color: rgba(0,113,197, 0.9);
      }

      .hero:hover h2, .hero:hover h3 {
        color: rgba(0,113,197, 1);
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

      .section {
        display: flex;
        height: calc(100vh - 56px);
        flex-direction: column;
        justify-content: center;
      }

      .section-single {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
      }

      .section-single h3 {
        padding-left: 16px;
        margin-bottom: 16px;
      }

      .title {
        margin: 1rem auto;
        text-align: center;
      }

      .box {
        padding: 32px;
        height: auto;
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0);
        background-color: rgba(255, 255, 255, 0.2);
      }

      .box:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      fluent-card {
        padding: 1rem;
        color: #3d3d3d;
        border: 0px;
        border-radius: 0px;
        box-shadow: none;
        background: rgba(255, 255, 255, 0.2);
      }

      fluent-card:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #000;
      }
 
      @media (min-width: 1024px) {
        .hero {
          margin: 1rem auto;
          padding: 0rem 0px 1rem;
        }
        
        .section {
          height: auto;
          background: transparent;
        }

        fluent-card {
          background: transparent;
        }

        fluent-card:hover {
          background: transparent;
        }

        .topic {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-row-gap: 0px;
          flex-direction: none;
          align-items: center;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) #ffffff;
        }
     
        *::-webkit-scrollbar {
          width: 5px;
        }
    
        *::-webkit-scrollbar-track {
          background: transparent;
        }
    
        *::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
          border: 0px solid transparent;
        }
        
      }

      @media (horizontal-viewport-segments: 2) {
      }

      @media (prefers-color-scheme: light) {
      }

      @media (prefers-color-scheme: dark) {
      }

      :host {
        --install-button-color: rgba(0,113,197, 1);
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
        margin-top: 8px;
      }

      .details-single {
        display: flex;
        margin-top: 8px;
        gap: 16px 16px;
      }

      .nametitle {
        margin-bottom: 8px;
        font-weight: 600;
      }

      .des {
        margin: 16px auto;
        padding: 16px;
        font-size: 14px;
        overflow-y: auto;
        background: rgba(255, 255, 255, 0.2);
      }

      .bio {
        margin: 16px auto;
        padding: 16px;
        font-size: 14px;
        overflow-y: auto;
        background: rgba(255, 255, 255, 0.2);
      }

      .des:hover, .bio:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      @media (max-width: 1024px) {
        .p2022 {
          background-image: none;
        }

        .scroll100 {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
        }

        .section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          object-fit: cover;
          object-position: center;
          width: 100%;
          background-image: linear-gradient(180deg,  rgba(227, 253, 245, 0.2) 5%, rgba(227, 253, 245, 0.4) 10%, rgba(255, 230, 250, 0.3) 100%);
        }

        .section-single h3 {
          margin-top: 0px;
        }
  
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

      .avatar-single {
        width: 80px;
        height: 80px;
        background-size: 80px 80px;
        margin-right: 10px;
        border: 4px solid hsl(100 100% 60%);
        border-radius: 80px;
      }

      .description {
        align-self: center;
      }

      .team {
        font-size: 14px;
      }

      #icon_qi {
        background-image: url('assets/2022/people/120/qi.png');
      }
      #icon_alex {
        background-image: url('assets/2022/people/120/alex.png');
      }
      #icon_cecilia {
        background-image: url('assets/2022/people/120/cecilia.png');
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
      #icon_yuanhong {
        background-image: url('assets/2022/people/120/yuanhong.png');
      }
      #icon_haoyu {
        background-image: url('assets/2022/people/120/haoyu.png');
      }
      #icon_pwabuilder {
        background-image: url('assets/2022/people/120/pwabuilder.png');
      }
      #icon_tianjian {
        background-image: url('assets/2022/people/120/tianjian.png');
      }

      .bili {
        margin: 16px auto;
        text-align: center;
      }

      iframe {
        max-width: 480px;
        max-height: 320px; 
      }

      #scrollicon svg {
        display: none;
      }

      @keyframes flickerAnimation { 
        0%   { opacity:1; }
        50%  { opacity:0; }
        100% { opacity:1; }
      }

      @media only screen and (max-height: 415px) and (orientation: landscape) {
        .p2022 {
          height: calc(100vh - 56px);
        }
        .hero {
          margin-top: 0;
          padding: 0;
        }
        #scrollicon {
          margin: 0px auto;
          text-align: center;
          position: absolute;
          bottom: 16px;
          width: 100%;
        }
        #scrollicon svg {
          display: inline-block;
          height: 20px;
          width: 20px;
          cursor: pointer;
          animation: flickerAnimation 2s infinite;
        }
        #scrollicon svg path {
          fill: rgba(0, 113, 197, 0.8);
        }
        #scrollicon:hover svg path {
          fill: rgba(0, 113, 197, 1);
        }

        .topic {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 16px;
          grid-row-gap: 0px;
          flex-direction: none;
          align-items: center;
        }
        iframe {
          max-width: 288px;
          max-height: calc((100vh - 56px)*0.6);
        }

        .box {
          padding: 16px;
          margin: 16px auto;
        }

        .bili {
          margin: 6px auto;
        }

        .des {
          max-height: 20vh;
        }
 
      }

      @media only screen and (max-width: 420px) and (orientation: portrait) {
        #scrollicon {
          margin: 0px auto;
          text-align: center;
          position: absolute;
          bottom: 16px;
          width: 100%;
        }
        #scrollicon svg {
          display: inline-block;
          height: 20px;
          width: 20px;
          cursor: pointer;
          animation: flickerAnimation 2s infinite;
        }
        #scrollicon svg path {
          fill: rgba(0, 113, 197, 0.8);
        }
        #scrollicon:hover svg path {
          fill: rgba(0, 113, 197, 1);
        }

        .bili {
          margin: 16px auto;
        }

        .des {
          max-height: 20vh;
        }
      }
      
      .bio a, .des a {
        color: rgba(0, 113, 197, 0.8);
        text-decoration: none;
        border-bottom: 1px dashed rgba(0, 113, 197, 1);;
      }

      .bio a:hover, .des a:hover {
        color: rgba(0,113,197, 1);
        text-decoration: none;
        border-bottom: 1px dashed rgba(0,113,197, 1);
      }

      @media only screen and (max-width: 420px) and (orientation: portrait) {
        .hero h2 {
          margin: 0rem auto 0.5rem auto;
        }
      }

      fluent-card a {
        color: rgba(0, 113, 197, 0.9);
        cursor: pointer;
        text-decoration: none;
        border-bottom: 0px dashed rgba(0, 113, 197, 0.6);
      }
  
      fluent-card a:hover {
        color: rgba(0, 113, 197, 1);
        border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
      }

      .card {
        margin-bottom: 16px;
        padding: 16px;
        background-color: rgba(255, 255, 255, 0.4);
      }

      .card:hover {
        background-color: rgba(255, 255, 255, 0.95);
      }

      .pdf {
        margin-top: 16px;
      }

      .pdf svg {
        width: 18px;
        height: 14px;
        fill: rgba(0, 113, 197, 0.9);
      }

      .pdf:hover svg {
        fill: rgba(0, 113, 197, 1.0);
      }

      .pdf a:last-child {
        
      }

     `}async firstUpdated(){console.log("\u6B22\u8FCE\u60A8!")}render(){if(this.jsondata){let i="",a=`
        <div class="p2022 section">
          <div class="hero">
            <h3>${this.subtitle}</h3>
            <h2>\u4E2D\u56FD <pwa-logo></pwa-logo> \u5F00\u53D1\u8005\u65E5</h2>
            <h3 class="h3b">${this.time}</h3>
          </div>
          <fluent-card class="box"> ${this.description}</fluent-card>
          <div id="scrollicon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/>
            </svg>
          </div>
        </div>
      `;if(this._getpath())for(let e of this.jsondata.t2022){let t="";e.pdf&&(t=`
            <a href="${e.bilibili}" title="${e.title} - ${e.speaker}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>
            </a>
            <a href="${e.youtube}" title="${e.title} - ${e.speaker}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </a>
            <a href="${e.pdf}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"/></svg>
              PDF
            </a>
            `);let o="";this._getpath()===e.path&&(o=`
            <fluent-card class="section-single">
              <div class="title">
                ${e.title}
              </div>
              <div class="topic">
                <div class="bili">
                  <iframe width="${this.screenwidth}" height="${this.screenheight}" src="https://player.bilibili.com/player.html?cid=${e.cid}&aid=${e.aid}&page=1&as_wide=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                  <div class="pdf">
                    ${t}
                  </div>
                </div>
                <div class="des-single">
                  <h3>\u4E3B\u9898\u6982\u8981</h3>
                  <div class="card"> 
                    ${e.des.replace(/\n/g,"<br>")}
                  </div>  
                </div>
              </div>

              <h3>\u5609\u5BBE\u7B80\u4ECB</h3>
              <div class="card">
                <div class="bio-single">${e.bio}</div>
              </div>

              <div class="details-single">
                <div class="avatar-single" id="icon_${e.iconid}"></div>
                
                <div class="description">
                  <div class="nametitle">${e.speaker}</div>
                  <div class="team">${e.pos}</div>
                  <div class="team">${e.com}</div>
                </div>
              </div>

              <app-footer-home></app-footer-home>
            </fluent-card>
            `,i+=o,a="")}else for(let e of this.jsondata.t2022){let t="";e.pdf&&(t=`
              <a href="${e.bilibili}" title="${e.title} - ${e.speaker}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"/></svg>
              </a>
              <a href="${e.youtube}" title="${e.title} - ${e.speaker}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
              <a href="${e.pdf}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"/></svg>
                PDF
              </a>
            `);let o="";o=`
            <fluent-card class="section">
              <div class="title">
                <a href="/2022/${e.path}">${e.title}</a></div>
              <div class="topic">
                <div class="bili">
                  <iframe width="${this.screenwidth}" height="${this.screenheight}" src="https://player.bilibili.com/player.html?cid=${e.cid}&aid=${e.aid}&page=1&as_wide=1&high_quality=1&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                  <div class="pdf">
                    ${t}
                  </div>
                </div>
                <div>
                  <fluent-tabs activeid="apps">
                    <fluent-tab id="apps">\u4E3B\u9898\u6982\u8981</fluent-tab>
                    <fluent-tab id="entrees">\u5609\u5BBE\u7B80\u4ECB</fluent-tab>
                    <fluent-tab-panel id="appsPanel" class="des">
                      ${e.des.replace(/\n/g,"<br>")}
                    </fluent-tab-panel>
                    <fluent-tab-panel id="entreesPanel" class="des">
                      ${e.bio}
                    </fluent-tab-panel>
                  </fluent-tabs>

                  <div class="details">
                    <div class="avatar" id="icon_${e.iconid}"></div>
                    <div class="description">
                      <div class="nametitle">${e.speaker}</div>
                      <div class="team">${e.pos}</div>
                      <div class="team">${e.com}</div>
                    </div>
                  </div>
                </div>
              </div>
            </fluent-card>
          `,i+=o}let r="";return a?r="scroll100":r="",d`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="${r}">
        ${c(a)}
        ${c(i)}
      </div>
      <pwa-install title="安装 中国 PWA 开发者日">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
          />
        </svg>
      </pwa-install>
      `}else return d`<div>No data</div>`}};n([l({type:String})],s.prototype,"subtitle",2);n([l({type:String})],s.prototype,"title",2);n([l({type:String})],s.prototype,"time",2);n([l({type:String})],s.prototype,"description",2);n([l({type:Object})],s.prototype,"jsondata",2);n([l({type:String})],s.prototype,"screenwidth",2);n([l({type:String})],s.prototype,"screenheight",2);s=n([h("app-2022")],s);export{s as App2022};
//# sourceMappingURL=app-2022.7ec8c244.js.map
