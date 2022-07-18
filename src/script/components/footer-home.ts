import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-footer-home')
export class AppFooterHome extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`

      footer {
        padding: 16px 0px 16px 0px;
        font-size: 14px;
        display: grid;
        grid-template-columns: 55fr 45fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .suggest {
        justify-self: end;
      }

      footer a {
        color: rgba(61, 61, 61, 1);
        text-decoration: none;
        margin: 0 2px;
      }

      footer a:hover {
        color: rgba(0,113,197, 1.0);
        border-bottom: 1px dashed rgba(0,113,197, 1);
      }

      @media(prefers-color-scheme: light) {
      }

      #slogan {
        margin: 16px auto 0px auto;
        text-align: center;
      }

      #engage {
        background: linear-gradient(90deg, rgba(0, 113, 197, 1.0) 0%, rgba(0, 199, 253, 1.0) 100%);
        background-repeat: no-repeat;
        color: #fff;
      }

      #engage, #play {
        padding: 2px 16px;
        display: inline-block;
      }

      #play {
        margin-left: -4px;
        color: #3D3D3D;
      }

      #play
      {
        background-image: linear-gradient(
          225deg,
          #231557 0%,
          #3d1488 29%,
          rgba(0, 113, 197, 1.0) 67%,
          rgba(0, 199, 253, 1.0) 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
      }

      @keyframes textclip {
        to {
          background-position: -200% center;
        }
      }

      #slogan:hover #engage {
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
      }

      #slogan:hover #play {
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
      }

      .wechat {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 0px;
        align-items: center;
        justify-items: center;
        margin: 16px auto;
      }

      #wechatg1 {
        height: 160px;
        width: 160px;
        background: url('assets/2022/wechat_group_1.png') center center / 160px 160px no-repeat padding-box content-box
      }

      #wechatinvite {
        height: 160px;
        width: 160px;
        background: url('assets/2022/wechat_admin_invite.png') center center / 160px 160px no-repeat padding-box content-box
      }

      .note {
        margin-top: 8px;
        text-align: center;
        font-size: 12px;
      }

    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    if (changedProperties.has('enableBack')) {
      console.log('enableBack', this.enableBack);
    }
  }

  render() {
    return html`
      <div class="wechat">
        <div>
          <div id="wechatg1"></div>
          <div class="note">PWA 开发者交流群</div>
        </div>
        <div>
          <div id="wechatinvite"></div>
          <div class="note">加此微信邀请入群</div>
        </div>
      </div>
      <div id="slogan">
        <span id="engage">为 Web 赋能</span>
        <span id="play">Play for Team Web</span>
      </div>
      <footer>
        <div><a href="https://demos.pwadev.io">&copy;</a>2022 <a href="https://pwadev.io" title="中国 PWA 开发者日">中国 PWA 开发者日</a></div>
        <div class="suggest">
          <a href="/code-of-conduct" appearance="primary" title="行为准则">行为准则</a>
          <a href="/privacy" appearance="primary" title="隐私">隐私</a>
          <a href="/about" appearance="primary" title="关于">关于</a>  
        </div>
      </footer>
    `;
  }
}
