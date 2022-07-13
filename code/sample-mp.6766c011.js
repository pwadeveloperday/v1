import{s as c,r as p,$ as d,i as u,n as h}from"./index.6954b438.js";import"./lit-video.6fc33520.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(t,e,o,l)=>{for(var i=l>1?void 0:l?g(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,o,i):n(i))||i);return l&&i&&v(e,o,i),i};let s=class extends c{constructor(){super()}async _playLocalVideo(){let t;[t]=await showOpenFilePicker();const e=await t.getFile();this.video.src=URL.createObjectURL(e)}async _playFileHandlerVideo(){"launchQueue"in window&&"files"in LaunchParams.prototype&&(console.log("\u60A8\u7684\u6D4F\u89C8\u5668\u652F\u6301\u6587\u4EF6\u5904\u7406 API"),launchQueue.setConsumer(async t=>{if(!t.files.length){this.msg.innerHTML="\u6CA1\u6709\u4ECE\u89C6\u9891\u6587\u4EF6\u53F3\u952E\u83DC\u5355\u6253\u5F00\u672C\u9875\u9762";return}for(let e of t.files){console.log(e);const o=await e.getFile();console.log(o),this.video.src=URL.createObjectURL(o)}}))}async connectedCallback(){super.connectedCallback(),this._playFileHandlerVideo()}static get styles(){return p`
      .act {
        display: flex;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: #FFFFFF;
        flex-direction: column;
      }
      lit-video {
        width: 100%;
        height: auto;
        max-height: 100%;
        margin: auto;
        outline: none;
      }

      #open {
        position: absolute;
        bottom: 48px;
        cursor: pointer;
      }

      #open svg {
        width: 32px;
        height: 24px;
      }

      #open svg path {
        fill: rgba(255, 255, 255, 0.8);
      }

      #open:hover svg path {
        fill: rgba(255, 255, 255, 1.0);
      }

    `}render(){return d`
      <fluent-card class="act">
        <lit-video 
          id="first-video"
          option="simple" 
          src="" 
          type="video/mp4">
        </lit-video>
        <a id="open" @click="${this._playLocalVideo}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
          </svg>
        </a>
      </fluent-card>
    `}};a([u("#first-video")],s.prototype,"video",2);a([u("#msg")],s.prototype,"msg",2);s=a([h("sample-mp")],s);export{s as SampleMP};
//# sourceMappingURL=sample-mp.6766c011.js.map
