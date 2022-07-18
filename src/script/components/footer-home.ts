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
        margin: 32px auto 0px auto;
        text-align: center;
      }

      #engage {
        background: linear-gradient(90deg, rgba(0, 113, 197, 1.0) 0%, rgba(0, 199, 253, 1.0) 100%);
        background-repeat: no-repeat;
        color: #fff;
      }

      #engage, #play {
        padding: 2px 16px;
        border: 1px solid rgba(255, 255, 255, 1);
        display: inline-block;
      }

      #play {
        margin-left: -4px;
        color: #3D3D3D;
      }

      #slogan:hover {
        transition: .3s;
      }

      #slogan:hover #engage {
        background: none;
        color: #3D3D3D;
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
      }

      #slogan:hover #play {
        background: linear-gradient(90deg, rgba(0, 199, 253, 1.0) 0%, rgba(0, 113, 197, 1.0) 100%);
        color: #fff;
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
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
