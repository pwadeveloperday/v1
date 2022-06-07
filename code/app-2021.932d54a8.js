import{s as p,r as f,$ as F,e as s,n as o}from"./index.fcc1d9b1.js";var E=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=(c,e,t,r)=>{for(var u=r>1?void 0:r?i(e,t):e,n=c.length-1,a;n>=0;n--)(a=c[n])&&(u=(r?a(e,t,u):a(u))||u);return r&&u&&E(e,t,u),u};let d=class extends p{constructor(){super(),this.description=`
    \u968F\u7740 PWA \u6280\u672F\u5F15\u5165\u4EE5\u53CA\u591A\u79CD Web \u5E73\u53F0\u80FD\u529B\u7684\u589E\u5F3A\uFF0CPWA \u6280\u672F\u7684 Web \u5E94\u7528\u83B7\u5F97\u4E86\u4E0E\u4F20\u7EDF\u672C\u5730\u5E94\u7528\u51E0\u4E4E\u76F8\u540C\u7684\u7528\u6237\u4F53\u9A8C\u5E76\u4E14\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u4E5F\u4FC3\u8FDB\u4E86\u5C0F\u7A0B\u5E8F\u751F\u6001\u7684\u53D1\u5C55\u3002
  `}static get styles(){return f`
      fluent-card {
        padding: 1rem;
        margin-top: 1rem;
      }
    `}render(){return F`
      <app-header ?enableBack="${!0}"></app-header>

      <fluent-card> ${this.description} </fluent-card>

      <div id="schedule">
        <fluent-card> Web 开发的现状与未来（开场介绍） - 张琦 </fluent-card>
        <fluent-card> PWA 在阿里巴巴交易履约业务中的实践 - 林燕燕 </fluent-card>
        <fluent-card> 对构建面向未来的网络应用程序的探索 - 陆远 </fluent-card>
        <fluent-card> Progressively build your PWA - 丛慧君 </fluent-card>
        <fluent-card> 当操作系统遇上 PWA - Diego González </fluent-card>
        <fluent-card> PWAs 的过去、现在和未来 - 元凯宁 </fluent-card>
        <fluent-card> 基于 Web 内核的微信小程序框架实践 - 陈博学 </fluent-card>
      </div>

      <app-footer></app-footer>
    `}};l([s({type:String})],d.prototype,"description",2);d=l([o("app-2021")],d);export{d as App2021};
//# sourceMappingURL=app-2021.932d54a8.js.map
