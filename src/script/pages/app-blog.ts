import { LitElement, css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('app-blog')
export class AppBlog extends LitElement {

  @property({ type: Object }) jsondata = {
    "name": "blog",
    "blog": [
      {
        "id": 1,
        "path" : "china-pwa-developer-day-2022",
        "title": "第二届中国 PWA 开发者日",
        "des": "第二届中国 PWA 开发者日 (China PWA Developer Day 2022) 即将于 2022 年 8 月 6 日线上举行。欢迎您的参与！",
        "des2": "",
        "date": "2022-08-06",
        "authors": [ {
          "author": "宋青见 (Edwin Song)",
          "pos": "首席产品经理",
          "com": "微软 Edge · 开发者生态 Bio",
          "iconid": "edwin",
          "icon": "assets/2022/people/120/edwin.png",
          "icon5": "assets/2022/people/500/edwin.png",
          "bio": "从业 20 余年，历经软件开发到产品经理，前端应用到云计算之间的风云变幻。曾在英特尔工作了 14 年，主要从事与性能优化、GPU 驱动程序和 Chromium 内核优化相关的软件开发和团队管理。之后，受 Chromium 新架构/创新的启发，有一段短暂的 H5 WebOS 创业经历，2016 年加入微软云计算团队，在 Azure RDS for MySQL 和区块链 PaaS 服务上工作了4年多，作为 Chormium 忠粉，在微软 Edge 浏览器全面采用 Chromium 内核后，加入 Edge PWA 团队，为构建 WebOS 的梦想再出发！",
          },
          {
            "author": "张敏 (Belem Zhang)",
            "pos": "软件技术经理",
            "com": "英特尔 SATG Web 平台工程",
            "iconid": "belem",
            "icon": "assets/2022/people/120/belem.png",
            "icon5": "assets/2022/people/500/belem.png",
            "bio": "张敏，参与了 Crosswork、<a href='https://webnn.dev/' target='_blank'>Web Neural Network (WebNN)</a>、渐进式 Web 应用 （PWA）等 Web 项目。 在 2013 年之前，他是 Opera Software 的软件工程经理并领导了客户端运营和关键数据产品团队。 张敏在浏览器产品及质量、网站兼容性、Web API 及应用等方面有多年经验，张敏正和团队努力将英特尔 XPU 的强大功能引入到 Web，并与 Web 社区携手推动 PWA 技术在国内的发展和落地。",
          }
        ]
      }
    ]
  };

  static get styles() {
    return css`
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
      margin: 0px 0px 32px 0px;
      text-align: center;
    }

    fluent-card {
      padding: 1rem;
      margin: 1rem auto;
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
      gap: 16px 32px;
    }

    .dessub {
      display: flex;
      gap: 16px 16px;
    }

    @media (max-width: 660px) {
      .details {
        flex-direction: column;
      }  
    }

    .article {
      font-size: 14px;
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
      font-size: 14px;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.2);
    }

    .des:hover, .bio:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    .avatar {
      width: 80px;
      height: 80px;
      background-size: 80px 80px;
      margin-right: 10px;
      border: 4px solid hsl(100 100% 60%);
      border-radius: 60px;
    }

    .description {
      align-self: center;
    }

    .nametitle {
      margin-bottom: 8px;
      font-weight: 600;
    }

    .team {
      font-size: 14px;
    }


    #icon_belem {
      background-image: url('assets/2022/people/120/belem.png');
    }

    #icon_wanming {
      background-image: url('assets/2022/people/120/wanming.png');
    }

    #icon_edwin {
      background-image: url('assets/2022/people/120/edwin.png');
    }

    #icon_wpe {
      background-image: url('assets/2022/people/120/wpe.png');
    }

    #icon_hongjuan {
      background-image: url('assets/2022/people/120/hongjuan.png');
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

    `;
  }

  _getpath() {
    let path = location.pathname.replace('/blog/', '');
    path = path.replace('/blog', '');
    console.log(path.trim());
    return path.trim();
  }

  async fetchData() {
    const response = await fetch('/assets/data/blog.json');
    this.jsondata = await response.json();
  }

  async connectedCallback() {
    super.connectedCallback();
    await this._getpath();
    await this.fetchData();
  }

  constructor() {
    super();
  }

  render() {
    if (this.jsondata) {
      let fluentdata = '';

      if(!this._getpath()) {
        for(let i of this.jsondata.blog) {
          let abstract = i.des.replace(/\n/g, '<br>');
          abstract = abstract.split('<!-- summary -->')[0];
          let fc = `
            <fluent-card id="id_${i.id}" class="ids">
              <div class="title">
                <a href="/blog/${i.path}">${i.title}</a>
              </div>
              <div class="article">
                ${abstract}
              </div>
            </fluent-card>
          `;
          fluentdata += fc;
        } 
      } else {
        for(let i of this.jsondata.blog) {
          if(this._getpath() === i.path) {
            let abstract = i.des.replace(/\n/g, '<br>');
            let abstract2 = i.des2.replace(/\n/g, '<br>');
            let authorcontent = '';
            for(let a of i.authors) {
              authorcontent += `
                <div class="dessub">
                  <div class="avatar" id="icon_${a.iconid}"></div>
                  <div class="description">
                    <div class="nametitle">${a.author}</div>
                    <div class="team">${a.pos}</div>
                    <div class="team">${a.com}</div>
                  </div>
                </div>
              `
            }
            let fc = `
              <fluent-card id="id_${i.id}" class="ids">
                <div class="title">${i.title}</div>
                <div class="date">${i.date}</div>
                <div class="article">
                  ${abstract}
                  ${abstract2}
                </div>
                <div class="details">
                  ${authorcontent}
                </div>
              </fluent-card>
            `;
            fluentdata += fc;
          }
        } 
      }

      let hero = '';

      if(!this._getpath()) {
        hero = `
          <h2><a href="/blog" title="博客">Blog</a></h2>
          <div class="desc">为您准备的关于 Web, PWA 及 Fugu API 的更新和故事</div>
        `;
      }

      return html`
        <app-header ?enableBack="${true}"></app-header>
        <div class="about">
          <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
          <fluent-breadcrumb-item href="/blog">Blog</fluent-breadcrumb-item>
          </fluent-breadcrumb>
            ${unsafeHTML(hero)}
          <div id="schedule">
            ${unsafeHTML(fluentdata)}
          </div>
        </div>
        <app-footer></app-footer>
      `;
    } else {
      return html`<app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <h2>Blog</h2>
        <div class="desc">为您准备的关于 PWA 及 Fugu API 的更新和故事</div>
        <fluent-card>
        </fluent-card>
      </div>
      <app-footer></app-footer>`;
    }
  }
}
