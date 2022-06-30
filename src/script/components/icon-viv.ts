import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('icon-viv')
export class IconViv extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;
  @property({ type: String }) svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="456" height="455" viewBox="0 0 456 455">
    <defs><linearGradient id="a" x1="21.587%" x2="76.116%" y1="5.709%" y2="100.496%"><stop stop-opacity=".2" offset="0%"/><stop stop-opacity=".05" offset="79.08%"/></linearGradient></defs><g fill="none"><path fill="rgba(239, 57, 57, 0.2)" d="M228 454.3c99.7 0 155.1 0 191.4-36.1 36.2-36.1 36.2-91.3 36.2-190.7 0-99.4 0-154.6-36.2-190.7C383.1.8 327.7.8 228 .8S72.9.8 36.6 36.9C.4 73 .4 128.2.4 227.6c0 99.4 0 154.6 36.2 190.7 36.3 36 91.7 36 191.4 36z"/><path fill="url(#a)" d="M376 143.7c-21.8-38.1-58.3-67.8-104.2-80.1C180.7 39.3 87.1 93.1 62.7 183.8c-12.3 45.6-4.7 91.9 17.5 129.7.3.5.6 1.1 1 1.6l80.2 138.5c13.3.4 27.7.5 43.2.5H227.2c44.3 0 79.9 0 109-3.2 36.3-4 62.3-12.9 82.4-32.9 29.3-29.2 34.9-71 36-138.7-46.8-80.8-78.5-135.5-78.6-135.6z"/><path fill="#FFF" d="M347.8 107.6c-66.5-66.4-174.4-66.4-241 0-66.5 66.4-66.5 174 0 240.3 66.5 66.4 174.4 66.4 241 0s66.6-174 0-240.3zm-10.2 78.1c-28.1 48.7-56.2 97.4-84.3 146.2-5.2 9.1-12.8 14.5-23.2 15.3-11.6.8-20.8-4.1-26.7-14.1-17.8-30.5-35.4-61.2-53-91.8-10.7-18.6-21.5-37.2-32.2-55.9-10.8-18.8 1.4-41.7 23-42.8 11.4-.6 20.2 4.7 26 14.6 7.9 13.5 15.7 27.2 23.6 40.8 5.7 9.8 11.2 19.7 17 29.3 8.4 14.1 20.8 22 37.3 23 23.3 1.4 45-15.5 47.8-40.2.2-1.8.3-3.7.4-4.6-.1-8-1.6-14.8-4.8-21.1-8.7-17.4.6-36.9 19.5-41.1 15.4-3.4 31.4 7.9 33.4 23.5 1 6.7-.4 13-3.8 18.9z"/></g>
  </svg>
  `

  static get styles() {
    return css`
     svg {
      max-height: 18px; 
      max-width: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    ${unsafeHTML(this.svg)}
    `;
  }
}
