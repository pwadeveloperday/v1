var On=Object.defineProperty,Rn=Object.defineProperties;var Mn=Object.getOwnPropertyDescriptors;var ot=Object.getOwnPropertySymbols;var Bn=Object.prototype.hasOwnProperty,Dn=Object.prototype.propertyIsEnumerable;var st=(n,e,t)=>e in n?On(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ee=(n,e)=>{for(var t in e||(e={}))Bn.call(e,t)&&st(n,t,e[t]);if(ot)for(var t of ot(e))Dn.call(e,t)&&st(n,t,e[t]);return n},Ae=(n,e)=>Rn(n,Mn(e));const Nn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};Nn();const Un="modulepreload",at={},jn="/",R=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${jn}${i}`,i in at)return;at[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Un,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),lt=new Map;class qt{constructor(e,t){if(this._$cssResult$=!0,t!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=lt.get(this.cssText);return Xe&&e===void 0&&(lt.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Fn=n=>new qt(typeof n=="string"?n:n+"",Qe),F=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[o+1],n[0]);return new qt(t,Qe)},zn=(n,e)=>{Xe?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)})},ct=Xe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Fn(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;const dt=window.trustedTypes,Vn=dt?dt.emptyScript:"",ht=window.reactiveElementPolyfillSupport,Ue={toAttribute(n,e){switch(e){case Boolean:n=n?Vn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Zt=(n,e)=>e!==n&&(e==e||n==n),Pe={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Zt};class Z extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ct(r))}else e!==void 0&&t.push(ct(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=Pe){var r,o;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const c=((o=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:Ue.toAttribute)(t,i.type);this._$Ei=e,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$Ei=null}}_$AK(e,t){var i,r,o;const s=this.constructor,c=s._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){const a=s.getPropertyOptions(c),l=a.converter,h=(o=(r=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof l=="function"?l:null)!==null&&o!==void 0?o:Ue.fromAttribute;this._$Ei=c,this[c]=h(t,a.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Zt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}Z.finalized=!0,Z.elementProperties=new Map,Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},ht==null||ht({ReactiveElement:Z}),((Se=globalThis.reactiveElementVersions)!==null&&Se!==void 0?Se:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const J=globalThis.trustedTypes,pt=J?J.createPolicy("lit-html",{createHTML:n=>n}):void 0,D=`lit$${(Math.random()+"").slice(9)}$`,Kt="?"+D,Hn=`<${Kt}>`,Y=document,oe=(n="")=>Y.createComment(n),se=n=>n===null||typeof n!="object"&&typeof n!="function",Gt=Array.isArray,In=n=>{var e;return Gt(n)||typeof((e=n)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,ft=/>/g,V=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,gt=/'/g,mt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Wn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),O=Wn(1),H=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),vt=new WeakMap,qn=(n,e,t)=>{var i,r;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let s=o._$litPart$;if(s===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=s=new he(e.insertBefore(oe(),c),c,void 0,t!=null?t:{})}return s._$AI(n),s},G=Y.createTreeWalker(Y,129,null,!1),Zn=(n,e)=>{const t=n.length-1,i=[];let r,o=e===2?"<svg>":"",s=te;for(let a=0;a<t;a++){const l=n[a];let h,d,p=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===te?d[1]==="!--"?s=ut:d[1]!==void 0?s=ft:d[2]!==void 0?(Jt.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=V):d[3]!==void 0&&(s=V):s===V?d[0]===">"?(s=r!=null?r:te,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?V:d[3]==='"'?mt:gt):s===mt||s===gt?s=V:s===ut||s===ft?s=te:(s=V,r=void 0);const g=s===V&&n[a+1].startsWith("/>")?" ":"";o+=s===te?l+Hn:p>=0?(i.push(h),l.slice(0,p)+"$lit$"+l.slice(p)+D+g):l+D+(p===-2?(i.push(void 0),a):g)}const c=o+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[pt!==void 0?pt.createHTML(c):c,i]};class ae{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0;const c=e.length-1,a=this.parts,[l,h]=Zn(e,t);if(this.el=ae.createElement(l,i),G.currentNode=this.el.content,t===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(r=G.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const p of r.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(D)){const u=h[s++];if(d.push(p),u!==void 0){const g=r.getAttribute(u.toLowerCase()+"$lit$").split(D),f=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:f[2],strings:g,ctor:f[1]==="."?Gn:f[1]==="?"?Yn:f[1]==="@"?Xn:$e})}else a.push({type:6,index:o})}for(const p of d)r.removeAttribute(p)}if(Jt.test(r.tagName)){const d=r.textContent.split(D),p=d.length-1;if(p>0){r.textContent=J?J.emptyScript:"";for(let u=0;u<p;u++)r.append(d[u],oe()),G.nextNode(),a.push({type:2,index:++o});r.append(d[p],oe())}}}else if(r.nodeType===8)if(r.data===Kt)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(D,d+1))!==-1;)a.push({type:7,index:o}),d+=D.length-1}o++}}static createElement(e,t){const i=Y.createElement("template");return i.innerHTML=e,i}}function X(n,e,t=n,i){var r,o,s,c;if(e===H)return e;let a=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const l=se(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,t,i)),i!==void 0?((s=(c=t)._$Cl)!==null&&s!==void 0?s:c._$Cl=[])[i]=a:t._$Cu=a),a!==void 0&&(e=X(n,a._$AS(n,e.values),a,i)),e}class Kn{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Y).importNode(i,!0);G.currentNode=o;let s=G.nextNode(),c=0,a=0,l=r[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new he(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new Qn(s,this,e)),this.v.push(h),l=r[++a]}c!==(l==null?void 0:l.index)&&(s=G.nextNode(),c++)}return o}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class he{constructor(e,t,i,r){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),se(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==H&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):In(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==v&&se(this._$AH)?this._$AA.nextSibling.data=e:this.k(Y.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ae.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(i);else{const s=new Kn(o,this),c=s.p(this.options);s.m(i),this.k(c),this._$AH=s}}_$AC(e){let t=vt.get(e.strings);return t===void 0&&vt.set(e.strings,t=new ae(e)),t}S(e){Gt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new he(this.M(oe()),this.M(oe()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class $e{constructor(e,t,i,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=X(this,e,t,0),s=!se(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{const c=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=X(this,c[i+a],t,a),l===H&&(l=this._$AH[a]),s||(s=!se(l)||l!==this._$AH[a]),l===v?e=v:e!==v&&(e+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}s&&!r&&this.C(e)}C(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Gn extends $e{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===v?void 0:e}}const Jn=J?J.emptyScript:"";class Yn extends $e{constructor(){super(...arguments),this.type=4}C(e){e&&e!==v?this.element.setAttribute(this.name,Jn):this.element.removeAttribute(this.name)}}class Xn extends $e{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:v)===H)return;const r=this._$AH,o=e===v&&r!==v||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==v&&(r===v||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Qn{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const _t=window.litHtmlPolyfillSupport;_t==null||_t(ae,he),((ke=globalThis.litHtmlVersions)!==null&&ke!==void 0?ke:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le,Te;class E extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=qn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return H}}E.finalized=!0,E._$litElement$=!0,(Le=globalThis.litElementHydrateSupport)===null||Le===void 0||Le.call(globalThis,{LitElement:E});const yt=globalThis.litElementPolyfillSupport;yt==null||yt({LitElement:E});((Te=globalThis.litElementVersions)!==null&&Te!==void 0?Te:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=n=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){window.customElements.define(t,s)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Ae(Ee({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function A(n){return(e,t)=>t!==void 0?((i,r,o)=>{r.constructor.createProperty(o,i)})(n,e,t):ei(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=({finisher:n,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:Ae(Ee({},t),{key:o});return n!=null&&(s.finisher=function(c){n(c,o)}),s}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(n,e){return ti({descriptor:t=>{const i={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,s;return this[r]===void 0&&(this[r]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;((Oe=window.HTMLSlotElement)===null||Oe===void 0?void 0:Oe.prototype.assignedElements)!=null;function _e(n){return n=n||[],Array.isArray(n)?n:[n]}function L(n){return`[Vaadin.Router] ${n}`}function ni(n){if(typeof n!="object")return String(n);const e=Object.prototype.toString.call(n).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}const ye="module",be="nomodule",je=[ye,be];function bt(n){if(!n.match(/.+\.[m]?js$/))throw new Error(L(`Unsupported type for bundle "${n}": .js or .mjs expected.`))}function Yt(n){if(!n||!k(n.path))throw new Error(L('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=n.bundle,t=["component","redirect","bundle"];if(!I(n.action)&&!Array.isArray(n.children)&&!I(n.children)&&!we(e)&&!t.some(i=>k(n[i])))throw new Error(L(`Expected route config "${n.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(k(e))bt(e);else if(je.some(i=>i in e))je.forEach(i=>i in e&&bt(e[i]));else throw new Error(L('Expected route bundle to include either "'+be+'" or "'+ye+'" keys, or both'));n.redirect&&["bundle","component"].forEach(i=>{i in n&&console.warn(L(`Route config "${n.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function wt(n){_e(n).forEach(e=>Yt(e))}function xt(n,e){let t=document.head.querySelector('script[src="'+n+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",n),e===ye?t.setAttribute("type",ye):e===be&&t.setAttribute(be,""),t.async=!0),new Promise((i,r)=>{t.onreadystatechange=t.onload=o=>{t.__dynamicImportLoaded=!0,i(o)},t.onerror=o=>{t.parentNode&&t.parentNode.removeChild(t),r(o)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function ii(n){return k(n)?xt(n):Promise.race(je.filter(e=>e in n).map(e=>xt(n[e],e)))}function ie(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function we(n){return typeof n=="object"&&!!n}function I(n){return typeof n=="function"}function k(n){return typeof n=="string"}function Xt(n){const e=new Error(L(`Page not found (${n.pathname})`));return e.context=n,e.code=404,e}const K=new class{};function ri(n){const e=n.port,t=n.protocol,o=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${o}`}function $t(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n.composedPath?n.composedPath():n.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ri(e))!==window.location.origin)return;const{pathname:r,search:o,hash:s}=e;ie("go",{pathname:r,search:o,hash:s})&&(n.preventDefault(),n&&n.type==="click"&&window.scrollTo(0,0))}const oi={activate(){window.document.addEventListener("click",$t)},inactivate(){window.document.removeEventListener("click",$t)}},si=/Trident/.test(navigator.userAgent);si&&!I(window.PopStateEvent)&&(window.PopStateEvent=function(n,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(n,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ct(n){if(n.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;ie("go",{pathname:e,search:t,hash:i})}const ai={activate(){window.addEventListener("popstate",Ct)},inactivate(){window.removeEventListener("popstate",Ct)}};var ee=on,li=tt,ci=ui,di=tn,hi=rn,Qt="/",en="./",pi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function tt(n,e){for(var t=[],i=0,r=0,o="",s=e&&e.delimiter||Qt,c=e&&e.delimiters||en,a=!1,l;(l=pi.exec(n))!==null;){var h=l[0],d=l[1],p=l.index;if(o+=n.slice(r,p),r=p+h.length,d){o+=d[1],a=!0;continue}var u="",g=n[r],f=l[2],w=l[3],S=l[4],$=l[5];if(!a&&o.length){var x=o.length-1;c.indexOf(o[x])>-1&&(u=o[x],o=o.slice(0,x))}o&&(t.push(o),o="",a=!1);var kn=u!==""&&g!==void 0&&g!==u,Ln=$==="+"||$==="*",Tn=$==="?"||$==="*",it=u||s,rt=w||S;t.push({name:f||i++,prefix:u,delimiter:it,optional:Tn,repeat:Ln,partial:kn,pattern:rt?fi(rt):"[^"+B(it)+"]+?"})}return(o||r<n.length)&&t.push(o+n.substr(r)),t}function ui(n,e){return tn(tt(n,e))}function tn(n){for(var e=new Array(n.length),t=0;t<n.length;t++)typeof n[t]=="object"&&(e[t]=new RegExp("^(?:"+n[t].pattern+")$"));return function(i,r){for(var o="",s=r&&r.encode||encodeURIComponent,c=0;c<n.length;c++){var a=n[c];if(typeof a=="string"){o+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=s(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');o+=a.prefix+h;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function B(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function fi(n){return n.replace(/([=!:$/()])/g,"\\$1")}function nn(n){return n&&n.sensitive?"":"i"}function gi(n,e){if(!e)return n;var t=n.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return n}function mi(n,e,t){for(var i=[],r=0;r<n.length;r++)i.push(on(n[r],e,t).source);return new RegExp("(?:"+i.join("|")+")",nn(t))}function vi(n,e,t){return rn(tt(n,t),e,t)}function rn(n,e,t){t=t||{};for(var i=t.strict,r=t.start!==!1,o=t.end!==!1,s=B(t.delimiter||Qt),c=t.delimiters||en,a=[].concat(t.endsWith||[]).map(B).concat("$").join("|"),l=r?"^":"",h=n.length===0,d=0;d<n.length;d++){var p=n[d];if(typeof p=="string")l+=B(p),h=d===n.length-1&&c.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+B(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?l+=B(p.prefix)+"("+u+")?":l+="(?:"+B(p.prefix)+"("+u+"))?":l+=B(p.prefix)+"("+u+")"}}return o?(i||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,nn(t))}function on(n,e,t){return n instanceof RegExp?gi(n,e):Array.isArray(n)?mi(n,e,t):vi(n,e,t)}ee.parse=li;ee.compile=ci;ee.tokensToFunction=di;ee.tokensToRegExp=hi;const{hasOwnProperty:_i}=Object.prototype,Fe=new Map;Fe.set("|false",{keys:[],pattern:/(?:)/});function Et(n){try{return decodeURIComponent(n)}catch{return n}}function yi(n,e,t,i,r){t=!!t;const o=`${n}|${t}`;let s=Fe.get(o);if(!s){const l=[];s={keys:l,pattern:ee(n,l,{end:t,strict:n===""})},Fe.set(o,s)}const c=s.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=s.keys[l-1],d=h.name,p=c[l];(p!==void 0||!_i.call(a,d))&&(h.repeat?a[d]=p?p.split(h.delimiter).map(Et):[]:a[d]=p&&Et(p))}return{path:c[0],keys:(i||[]).concat(s.keys),params:a}}function sn(n,e,t,i,r){let o,s,c=0,a=n.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(n===l)return{done:!0};const h=n.__children=n.__children||n.children;if(!o&&(o=yi(a,e,!h,i,r),o))return{done:!1,value:{route:n,keys:o.keys,params:o.params,path:o.path}};if(o&&h)for(;c<h.length;){if(!s){const p=h[c];p.parent=n;let u=o.path.length;u>0&&e.charAt(u)==="/"&&(u+=1),s=sn(p,e.substr(u),t,o.keys,o.params)}const d=s.next(l);if(!d.done)return{done:!1,value:d.value};s=null,c++}return{done:!0}}}}function bi(n){if(I(n.route.action))return n.route.action(n)}function wi(n,e){let t=e;for(;t;)if(t=t.parent,t===n)return!0;return!1}function xi(n){let e=`Path '${n.pathname}' is not properly resolved due to an error.`;const t=(n.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function $i(n,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const r={path:i,route:t};if(!n.chain)n.chain=[];else if(t.parent){let o=n.chain.length;for(;o--&&n.chain[o].route&&n.chain[o].route!==t.parent;)n.chain.pop()}n.chain.push(r)}}class le{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||bi,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){wt(e);const t=[..._e(e)];this.root.__children=t}addRoutes(e){return wt(e),this.root.__children.push(..._e(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,k(e)?{pathname:e}:e),i=sn(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,s=null,c=t;function a(l,h=o.value.route,d){const p=d===null&&o.value.route;return o=s||i.next(p),s=null,!l&&(o.done||!wi(h,o.value.route))?(s=o,Promise.resolve(K)):o.done?Promise.reject(Xt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,o.value),$i(c,o.value),Promise.resolve(r(c)).then(u=>u!=null&&u!==K?(c.result=u.result||u,c):a(l,h,u)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=xi(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}le.pathToRegexp=ee;const{pathToRegexp:At}=le,St=new Map;function an(n,e,t){const i=e.name||e.component;if(i&&(n.has(i)?n.get(i).push(e):n.set(i,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const o=t[r];o.parent=e,an(n,o,o.__children||o.children)}}function Pt(n,e){const t=n.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function kt(n){let e=n.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ci(n,e={}){if(!(n instanceof le))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,r)=>{let o=Pt(t,i);if(!o&&(t.clear(),an(t,n.root,n.root.__children),o=Pt(t,i),!o))throw new Error(`Route "${i}" not found`);let s=St.get(o.fullPath);if(!s){let a=kt(o),l=o.parent;for(;l;){const u=kt(l);u&&(a=u.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=At.parse(a),d=At.tokensToFunction(h),p=Object.create(null);for(let u=0;u<h.length;u++)k(h[u])||(p[h[u].name]=!0);s={toPath:d,keys:p},St.set(a,s),o.fullPath=a}let c=s.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let d=0;d<l.length;d++){const p=l[d];s.keys[p]||(a[p]=r[p])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let Lt=[];function Ei(n){Lt.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),Lt=n}const Ai=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},Si=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};function Tt(n,e){return n.classList.add(e),new Promise(t=>{if(Ai(n)){const i=n.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;n.setAttribute("style",`position: absolute; ${r}`),Si(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}const Pi=256;function Re(n){return n!=null}function ki(n){const e=Object.assign({},n);return delete e.next,e}function P({pathname:n="",search:e="",hash:t="",chain:i=[],params:r={},redirectFrom:o,resolver:s},c){const a=i.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:n,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:o,getUrl:(l={})=>me(U.pathToRegexp.compile(ln(a))(Object.assign({},r,l)),s)}}function Ot(n,e){const t=Object.assign({},n.params);return{redirect:{pathname:e,from:n.pathname,params:t}}}function Li(n,e){e.location=P(n);const t=n.chain.map(i=>i.route).indexOf(n.route);return n.chain[t].element=e,e}function ge(n,e,t){if(I(n))return n.apply(t,e)}function Rt(n,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return ge(t[n],e,t)}}function Ti(n,e){if(!Array.isArray(n)&&!we(n))throw new Error(L(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${n}`));e.__children=[];const t=_e(n);for(let i=0;i<t.length;i++)Yt(t[i]),e.__children.push(t[i])}function ue(n){if(n&&n.length){const e=n[0].parentNode;for(let t=0;t<n.length;t++)e.removeChild(n[t])}}function me(n,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(n.replace(/^\//,""),t).pathname:n}function ln(n){return n.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class U extends le{constructor(e,t){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&le.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const o=U.NavigationTrigger;U.setTriggers.apply(U,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=P({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();I(t.children)&&(i=i.then(()=>t.children(ki(e))).then(o=>{!Re(o)&&!I(t.children)&&(o=t.children),Ti(o,t)}));const r={redirect:o=>Ot(e,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(e))return ge(t.action,[e,r],t)}).then(o=>{if(Re(o)&&(o instanceof HTMLElement||o.redirect||o===K))return o;if(k(t.redirect))return r.redirect(t.redirect);if(t.bundle)return ii(t.bundle).then(()=>{},()=>{throw new Error(L(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(o=>{if(Re(o))return o;if(k(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},k(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=P(o),t&&this.__updateBrowserHistory(o,i===1),ie("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const c=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),c.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ue(this.__outlet&&this.__outlet.children),this.location=P(Object.assign(r,{resolver:this})),ie("error",Object.assign({router:this,error:o},r)),o}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const o=i!==t?i:e,c=me(ln(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(p=>p===null||p===K?c?l:h.parent!==null?a(l,h.parent,p):p:p);return a(i).then(l=>{if(l===null||l===K)throw Xt(o);return l&&l!==K&&l!==i?this.__fullyResolveChain(o,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Li(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(L(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ni(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],r=e.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),c=a=>Ot(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,r.length)&&!(i[a].route!==r[a].route||i[a].path!==r[a].path&&i[a].element!==r[a].element||!this.__isReusableElement(i[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},i[a]);for(let a=0;a<r.length;a++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:c},r[a]),i[a].element.location=P(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},i[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=P(e,i[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:c},r[a]),r[a].element&&(r[a].element.location=P(e,r[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,r){const o=P(t);return e.then(s=>{if(this.__isLatestRender(t))return Rt("onBeforeLeave",[o,i,this],r.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,i,r){const o=P(t,r.route);return e.then(s=>{if(this.__isLatestRender(t))return Rt("onBeforeEnter",[o,i,this],r.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Pi)throw new Error(L(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(L(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o)if(o.parentNode===i)e.chain[r].element=o,i=o;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let r=i;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const s=e.chain[o].element;s&&(r.appendChild(s),this.__addedByRouter.set(s,!0),r===i&&this.__appearingContent.push(s),r=s)}}__removeDisappearingContent(){this.__disappearingContent&&ue(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ue(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(!!t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=t.chain[i].element;if(!!r)try{const o=P(e);ge(r.onAfterLeave,[o,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ue(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},r=P(e,e.chain[t].route);ge(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],o=e.chain;let s;for(let c=o.length;c>0;c--)if(o[c-1].route.animate){s=o[c-1].route.animate;break}if(t&&i&&s){const c=we(s)&&s.leave||"leaving",a=we(s)&&s.enter||"entering";r.push(Tt(t,c)),r.push(Tt(i,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:r}=e?e.detail:window.location;k(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:r},!0))}static setTriggers(...e){Ei(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ci(this)),me(this.__urlForName(e,t),this)}urlForPath(e,t){return me(U.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:r}=k(e)?this.__createUrl(e,"http://a"):e;return ie("go",{pathname:t,search:i,hash:r})}}const Oi=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ve=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ri(){function n(){return!0}return cn(n)}function Mi(){try{return Bi()?!0:Di()?ve?!Ni():!Ri():!1}catch{return!1}}function Bi(){return localStorage.getItem("vaadin.developmentmode.force")}function Di(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ni(){return!!(ve&&Object.keys(ve).map(e=>ve[e]).filter(e=>e.productionMode).length>0)}function cn(n,e){if(typeof n!="function")return;const t=Oi.exec(n.toString());if(t)try{n=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return n(e)}window.Vaadin=window.Vaadin||{};const Mt=function(n,e){if(window.Vaadin.developmentMode)return cn(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Mi());function Ui(){}const ji=function(){if(typeof Mt=="function")return Mt(Ui)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ji();U.NavigationTrigger={POPSTATE:ai,CLICK:oi};try{self["workbox:window:6.5.2"]&&_()}catch{}function Bt(n,e){return new Promise(function(t){var i=new MessageChannel;i.port1.onmessage=function(r){t(r.data)},n.postMessage(e,[i.port2])})}function Fi(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Dt(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function zi(n,e){var t;if(typeof Symbol=="undefined"||n[Symbol.iterator]==null){if(Array.isArray(n)||(t=function(r,o){if(r){if(typeof r=="string")return Dt(r,o);var s=Object.prototype.toString.call(r).slice(8,-1);return s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set"?Array.from(r):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Dt(r,o):void 0}}(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Me=function(){var n=this;this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})};function Be(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var ne=function(n,e){this.type=n,Object.assign(this,e)};function fe(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function Vi(){}var Hi={type:"SKIP_WAITING"};function Nt(n,e){if(!e)return n&&n.then?n.then(Vi):Promise.resolve()}var Ii=function(n){var e,t;function i(c,a){var l,h;return a===void 0&&(a={}),(l=n.call(this)||this).nn={},l.tn=0,l.rn=new Me,l.en=new Me,l.on=new Me,l.un=0,l.an=new Set,l.cn=function(){var d=l.fn,p=d.installing;l.tn>0||!Be(p.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=p,d.removeEventListener("updatefound",l.cn)):(l.hn=p,l.an.add(p),l.rn.resolve(p)),++l.tn,p.addEventListener("statechange",l.ln)},l.ln=function(d){var p=l.fn,u=d.target,g=u.state,f=u===l.vn,w={sw:u,isExternal:f,originalEvent:d};!f&&l.mn&&(w.isUpdate=!0),l.dispatchEvent(new ne(g,w)),g==="installed"?l.wn=self.setTimeout(function(){g==="installed"&&p.waiting===u&&l.dispatchEvent(new ne("waiting",w))},200):g==="activating"&&(clearTimeout(l.wn),f||l.en.resolve(u))},l.dn=function(d){var p=l.hn,u=p!==navigator.serviceWorker.controller;l.dispatchEvent(new ne("controlling",{isExternal:u,originalEvent:d,sw:p,isUpdate:l.mn})),u||l.on.resolve(p)},l.gn=(h=function(d){var p=d.data,u=d.ports,g=d.source;return fe(l.getSW(),function(){l.an.has(g)&&l.dispatchEvent(new ne("message",{data:p,originalEvent:d,ports:u,sw:g}))})},function(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];try{return Promise.resolve(h.apply(this,d))}catch(u){return Promise.reject(u)}}),l.sn=c,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r,o,s=i.prototype;return s.register=function(c){var a=(c===void 0?{}:c).immediate,l=a!==void 0&&a;try{var h=this;return function(d,p){var u=d();return u&&u.then?u.then(p):p(u)}(function(){if(!l&&document.readyState!=="complete")return Nt(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return h.mn=Boolean(navigator.serviceWorker.controller),h.yn=h.pn(),fe(h.bn(),function(d){h.fn=d,h.yn&&(h.hn=h.yn,h.en.resolve(h.yn),h.on.resolve(h.yn),h.yn.addEventListener("statechange",h.ln,{once:!0}));var p=h.fn.waiting;return p&&Be(p.scriptURL,h.sn.toString())&&(h.hn=p,Promise.resolve().then(function(){h.dispatchEvent(new ne("waiting",{sw:p,wasWaitingBeforeRegister:!0}))}).then(function(){})),h.hn&&(h.rn.resolve(h.hn),h.an.add(h.hn)),h.fn.addEventListener("updatefound",h.cn),navigator.serviceWorker.addEventListener("controllerchange",h.dn),h.fn})})}catch(d){return Promise.reject(d)}},s.update=function(){try{return this.fn?Nt(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(c){try{return fe(this.getSW(),function(a){return Bt(a,c)})}catch(a){return Promise.reject(a)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Bt(this.fn.waiting,Hi)},s.pn=function(){var c=navigator.serviceWorker.controller;return c&&Be(c.scriptURL,this.sn.toString())?c:void 0},s.bn=function(){try{var c=this;return function(a,l){try{var h=a()}catch(d){return l(d)}return h&&h.then?h.then(void 0,l):h}(function(){return fe(navigator.serviceWorker.register(c.sn,c.nn),function(a){return c.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=i,(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Fi(r.prototype,o),i}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(t,i){this.Sn(t).add(i)},e.removeEventListener=function(t,i){this.Sn(t).delete(i)},e.dispatchEvent=function(t){t.target=this;for(var i,r=zi(this.Sn(t.type));!(i=r()).done;)(0,i.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},n}());function Wi(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:r,onRegisterError:o}=n;let s;const c=async(a=!0)=>{};return"serviceWorker"in navigator&&(s=new Ii("/sw.js",{scope:"/",type:"classic"}),s.addEventListener("activated",a=>{a.isUpdate?window.location.reload():i==null||i()}),s.register({immediate:e}).then(a=>{r==null||r(a)}).catch(a=>{o==null||o(a)})),c}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=n=>(...e)=>({_$litDirective$:n,values:e});class Ki{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ze extends Ki{constructor(e){if(super(e),this.it=v,e.type!==qi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this.ft=void 0,this.it=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ze.directiveName="unsafeHTML",ze.resultType=1;const Gi=Zi(ze);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ut=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ve=(n,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;n.removeChild(e),e=i}},M=`{{lit-${String(Math.random()).slice(2)}}}`,dn=`<!--${M}-->`,jt=new RegExp(`${M}|${dn}`);class hn{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const d=o.nextNode();if(d!==null){if(c++,d.nodeType===1){if(d.hasAttributes()){const p=d.attributes,{length:u}=p;let g=0;for(let f=0;f<u;f++)Ft(p[f].name,"$lit$")&&g++;for(;g-- >0;){const f=l[a],w=He.exec(f)[2],S=w.toLowerCase()+"$lit$",$=d.getAttribute(S);d.removeAttribute(S);const x=$.split(jt);this.parts.push({type:"attribute",index:c,name:w,strings:x}),a+=x.length-1}}d.tagName==="TEMPLATE"&&(r.push(d),o.currentNode=d.content)}else if(d.nodeType===3){const p=d.data;if(p.indexOf(M)>=0){const u=d.parentNode,g=p.split(jt),f=g.length-1;for(let w=0;w<f;w++){let S,$=g[w];if($==="")S=N();else{const x=He.exec($);x!==null&&Ft(x[2],"$lit$")&&($=$.slice(0,x.index)+x[1]+x[2].slice(0,-5)+x[3]),S=document.createTextNode($)}u.insertBefore(S,d),this.parts.push({type:"node",index:++c})}g[f]===""?(u.insertBefore(N(),d),i.push(d)):d.data=g[f],a+=f}}else if(d.nodeType===8)if(d.data===M){const p=d.parentNode;d.previousSibling!==null&&c!==s||(c++,p.insertBefore(N(),d)),s=c,this.parts.push({type:"node",index:c}),d.nextSibling===null?d.data="":(i.push(d),c--),a++}else{let p=-1;for(;(p=d.data.indexOf(M,p+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=r.pop()}for(const d of i)d.parentNode.removeChild(d)}}const Ft=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},pn=n=>n.index!==-1,N=()=>document.createComment(""),He=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function zt(n,e){const{element:{content:t},parts:i}=n,r=document.createTreeWalker(t,133,null,!1);let o=re(i),s=i[o],c=-1,a=0;const l=[];let h=null;for(;r.nextNode();){c++;const d=r.currentNode;for(d.previousSibling===h&&(h=null),e.has(d)&&(l.push(d),h===null&&(h=d)),h!==null&&a++;s!==void 0&&s.index===c;)s.index=h!==null?-1:s.index-a,o=re(i,o),s=i[o]}l.forEach(d=>d.parentNode.removeChild(d))}const Ji=n=>{let e=n.nodeType===11?0:1;const t=document.createTreeWalker(n,133,null,!1);for(;t.nextNode();)e++;return e},re=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){const i=n[t];if(pn(i))return t}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Yi=new WeakMap,ce=n=>typeof n=="function"&&Yi.has(n),T={},Vt={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ie{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=Ut?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,s=0,c=0,a=r.nextNode();for(;s<i.length;)if(o=i[s],pn(o)){for(;c<o.index;)c++,a.nodeName==="TEMPLATE"&&(t.push(a),r.currentNode=a.content),(a=r.nextNode())===null&&(r.currentNode=t.pop(),a=r.nextNode());if(o.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return Ut&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xi=` ${M} `;class un{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const o=this.strings[r],s=o.lastIndexOf("<!--");i=(s>-1||i)&&o.indexOf("-->",s+1)===-1;const c=He.exec(o);t+=c===null?o+(i?Xi:dn):o.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+M}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const nt=n=>n===null||!(typeof n=="object"||typeof n=="function"),fn=n=>Array.isArray(n)||!(!n||!n[Symbol.iterator]);class gn{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let r=0;r<i.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new mn(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let r=0;r<t;r++){i+=e[r];const o=this.parts[r];if(o!==void 0){const s=o.value;if(nt(s)||!fn(s))i+=typeof s=="string"?s:String(s);else for(const c of s)i+=typeof c=="string"?c:String(c)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class mn{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===T||nt(e)&&e===this.value||(this.value=e,ce(e)||(this.committer.dirty=!0))}commit(){for(;ce(this.value);){const e=this.value;this.value=T,e(this)}this.value!==T&&this.committer.commit()}}class Ce{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(N()),this.endNode=e.appendChild(N())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=N()),e.__insert(this.endNode=N())}insertAfterPart(e){e.__insert(this.startNode=N()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;ce(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=T,t(this)}const e=this.__pendingValue;e!==T&&(nt(e)?e!==this.value&&this.__commitText(e):e instanceof un?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):fn(e)?this.__commitIterable(e):e===Vt?(this.value=Vt,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i=typeof(e=e==null?"":e)=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ie&&this.value.template===t)this.value.update(e.values);else{const i=new Ie(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const o of e)i=t[r],i===void 0&&(i=new Ce(this.options),t.push(i),r===0?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(o),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){Ve(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Qi{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;ce(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=T,t(this)}if(this.__pendingValue===T)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=T}}class er extends gn{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new tr(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class tr extends mn{}let vn=!1;(()=>{try{const n={get capture(){return vn=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();class nr{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=r=>this.handleEvent(r)}setValue(e){this.__pendingValue=e}commit(){for(;ce(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=T,o(this)}if(this.__pendingValue===T)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=ir(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=T}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ir=n=>n&&(vn?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);function rr(n){let e=de.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},de.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const i=n.strings.join(M);return t=e.keyString.get(i),t===void 0&&(t=new hn(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}const de=new Map,q=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const or=new class{handleAttributeExpressions(n,e,t,i){const r=e[0];return r==="."?new er(n,e.slice(1),t).parts:r==="@"?[new nr(n,e.slice(1),i.eventContext)]:r==="?"?[new Qi(n,e.slice(1),t)]:new gn(n,e,t).parts}handleTextExpression(n){return new Ce(n)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(n,...e)=>new un(n,e,"html",or),_n=(n,e)=>`${n}--${e}`;let xe=!0;window.ShadyCSS===void 0?xe=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),xe=!1);const sr=n=>e=>{const t=_n(e.type,n);let i=de.get(t);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},de.set(t,i));let r=i.stringsArray.get(e.strings);if(r!==void 0)return r;const o=e.strings.join(M);if(r=i.keyString.get(o),r===void 0){const s=e.getTemplateElement();xe&&window.ShadyCSS.prepareTemplateDom(s,n),r=new hn(e,s),i.keyString.set(o,r)}return i.stringsArray.set(e.strings,r),r},ar=["html","svg"],yn=new Set,lr=(n,e,t)=>{yn.add(n);const i=t?t.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(o===0)return void window.ShadyCSS.prepareTemplateStyles(i,n);const s=document.createElement("style");for(let l=0;l<o;l++){const h=r[l];h.parentNode.removeChild(h),s.textContent+=h.textContent}(l=>{ar.forEach(h=>{const d=de.get(_n(h,l));d!==void 0&&d.keyString.forEach(p=>{const{element:{content:u}}=p,g=new Set;Array.from(u.querySelectorAll("style")).forEach(f=>{g.add(f)}),zt(p,g)})})})(n);const c=i.content;t?function(l,h,d=null){const{element:{content:p},parts:u}=l;if(d==null)return void p.appendChild(h);const g=document.createTreeWalker(p,133,null,!1);let f=re(u),w=0,S=-1;for(;g.nextNode();)for(S++,g.currentNode===d&&(w=Ji(h),d.parentNode.insertBefore(h,d));f!==-1&&u[f].index===S;){if(w>0){for(;f!==-1;)u[f].index+=w,f=re(u,f);return}f=re(u,f)}}(t,s,c.firstChild):c.insertBefore(s,c.firstChild),window.ShadyCSS.prepareTemplateStyles(i,n);const a=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(t){c.insertBefore(s,c.firstChild);const l=new Set;l.add(s),zt(t,l)}};window.JSCompiler_renameProperty=(n,e)=>n;const We={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},bn=(n,e)=>e!==n&&(e==e||n==n),De={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:bn};class wn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);r!==void 0&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(e,t=De){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||De}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of i)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=bn){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||We,o=typeof r=="function"?r:r.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||We.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const i=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=De){const r=this.constructor,o=r._attributeNameForProperty(e,i);if(o!==void 0){const s=r._propertyValueToAttribute(t,i);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(r!==void 0){const o=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,o),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(e!==void 0){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),o.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(i){throw e=!1,this._markUpdated(),i}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}wn.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const cr=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function b(n){return(e,t)=>t!==void 0?((i,r,o)=>{r.constructor.createProperty(o,i)})(n,e,t):cr(n,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const xn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$n=Symbol();class Ht{constructor(e,t){if(t!==$n)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(xn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const dr=(n,...e)=>{const t=e.reduce((i,r,o)=>i+(s=>{if(s instanceof Ht)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(r)+n[o+1],n[0]);return new Ht(t,$n)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const It={};class qe extends wn{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(e===void 0)this._styles=[];else if(Array.isArray(e)){const t=(o,s)=>o.reduceRight((c,a)=>Array.isArray(a)?t(a,c):(c.add(a),c),s),i=t(e,new Set),r=[];i.forEach(o=>r.unshift(o)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?xn?this.renderRoot.adoptedStyleSheets=e.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==It&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const r=document.createElement("style");r.textContent=i.cssText,this.renderRoot.appendChild(r)}))}render(){return It}}qe.finalized=!0,qe.render=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const i=t.scopeName,r=q.has(e),o=xe&&e.nodeType===11&&!!e.host,s=o&&!yn.has(i),c=s?document.createDocumentFragment():e;if(((a,l,h)=>{let d=q.get(l);d===void 0&&(Ve(l,l.firstChild),q.set(l,d=new Ce(Object.assign({templateFactory:rr},h))),d.appendInto(l)),d.setValue(a),d.commit()})(n,c,Object.assign({templateFactory:sr(i)},t)),s){const a=q.get(c);q.delete(c);const l=a.value instanceof Ie?a.value.template:void 0;lr(i,c,l),Ve(e,e.firstChild),e.appendChild(c),q.set(e,a)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var y=function(n,e,t,i){var r,o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let m=class extends qe{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",n=>this.handleInstallPromptEvent(n)),document.addEventListener("keyup",n=>{n.key==="Escape"&&this.cancel()})}static get styles(){return dr`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(n){this.deferredprompt=n,this.hasprompt=!0,n.preventDefault()}checkManifest(n){n.icons&&n.icons[0]?n.name?n.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const n=await fetch(this.manifestpath),e=await n.json();if(this.manifestdata=e,this.manifestdata)return this.checkManifest(this.manifestdata),e}catch{return null}}scrollToLeft(){const n=this.shadowRoot.querySelector("#screenshots");n.scrollBy({left:-n.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const n=this.shadowRoot.querySelector("#screenshots");n.scrollBy({left:n.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let n=new CustomEvent("show");this.dispatchEvent(n)}closePrompt(){this.openmodal=!1;let n=new CustomEvent("hide");this.dispatchEvent(n)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let n=new CustomEvent("show");if(this.dispatchEvent(n),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((n,e)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let t=new CustomEvent("hide");this.dispatchEvent(t),n()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(n=>C`<li>${n}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(n=>C`<div><img alt="App Screenshot" src="${n.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Ne;y([b({type:String})],m.prototype,"manifestpath",void 0),y([b({type:String})],m.prototype,"iconpath",void 0),y([b({type:Object})],m.prototype,"manifestdata",void 0),y([b({type:Boolean})],m.prototype,"openmodal",void 0),y([b({type:Boolean})],m.prototype,"showopen",void 0),y([b({type:Boolean})],m.prototype,"isSupportingBrowser",void 0),y([b({type:Boolean})],m.prototype,"isIOS",void 0),y([b({type:Boolean})],m.prototype,"installed",void 0),y([b({type:Boolean})],m.prototype,"hasprompt",void 0),y([b({type:Boolean})],m.prototype,"usecustom",void 0),y([b({type:Array})],m.prototype,"relatedApps",void 0),y([b({type:String})],m.prototype,"explainer",void 0),y([b({type:String})],m.prototype,"featuresheader",void 0),y([b({type:String})],m.prototype,"descriptionheader",void 0),y([b({type:String})],m.prototype,"installbuttontext",void 0),y([b({type:String})],m.prototype,"cancelbuttontext",void 0),y([b({type:String})],m.prototype,"iosinstallinfotext",void 0),y([b()],m.prototype,"deferredprompt",void 0),m=y([(Ne="pwa-install",n=>typeof n=="function"?((e,t)=>(window.customElements.define(e,t),t))(Ne,n):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(o){window.customElements.define(e,o)}}})(Ne,n))],m);var hr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,W=(n,e,t,i)=>{for(var r=i>1?void 0:i?pr(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&hr(e,t,r),r};let j=class extends E{constructor(){super(),this.description=`
    \u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u4E0E\u82F1\u7279\u5C14\u643A\u624B\u4E3E\u529E\u201C\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u201D\u3002
    \u672C\u6B21\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002
    
    \u671F\u5F85\u4E0E\u60A8\u7EBF\u4E0A\u76F8\u805A\u3002
    `,this.jsondata={name:"PWA Developer Day 2022",t2022:[{id:1,time:"13:00",tag:"",title:"\u5F00\u5E55\u81F4\u8F9E",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u82F1\u7279\u5C14 SATG Web \u5E73\u53F0\u5DE5\u7A0B",iconid:"qi",icon:"assets/2022/people/120/qi.png",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"",bilibili:"",aid:"",cid:"",youtube:""}],t2021:[{id:1,tag:"opening",title:"Web \u5F00\u53D1\u7684\u73B0\u72B6\u4E0E\u672A\u6765\uFF08\u5F00\u573A\u4ECB\u7ECD\uFF09",des:"",speaker:"\u5F20\u7426",pos:"\u8D44\u6DF1\u6280\u672F\u603B\u76D1",com:"\u8F6F\u4EF6\u4E0E\u5148\u8FDB\u6280\u672F\u4E8B\u4E1A\u90E8 Web \u5E73\u53F0\u5DE5\u7A0B",icon:"",icon5:"assets/2022/people/500/qi.png",bio:"",pdf:"https://d3i5xkfad89fac.cloudfront.net/pwa/2021/slides/02.pdf",bilibili:"https://www.bilibili.com/video/BV1Kv4y1G7L8",aid:"554870624",cid:"741436422",youtube:"https://youtu.be/npMpZHMizUc"}]},this.playpromise=""}_playHeroVideo(){this._herovideo.play()}_pauseHeroVideo(){this._herovideo.paused||this._herovideo.pause()}_checkVideoAutoPlay(){let n=this._herovideo.play();n!==void 0&&n.then(e=>{this.playpromise="Autoplay started!",console.log("+ Autoplay started!")}).catch(e=>{this.playpromise="Autoplay was prevented!",console.log("- Autoplay was prevented!")})}async connectedCallback(){super.connectedCallback(),await this.fetchData(),this._checkVideoAutoPlay()}async fetchData(){await fetch("/data.json");const n=await fetch("/data.json");this.jsondata=await n.json()}static get styles(){return F`
    #superhero {
      height: 100vh;
      width: 100%;
      position: absolute;
      overflow: hidden;
      /* background: url(/assets/img/vbg.png) no-repeat center center/cover; */
      z-index: 0;
    }

    video {
      min-width: 100%;
      min-height: 100vh;
      z-index: 0;
    }

    #manualplay, #manualpause {
      color: rgba(255, 255, 255, 0.5);
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 10px 20px;
      cursor: pointer;
      margin: auto 4px;
    }

    #manualplay:hover, #manualpause:hover {
      color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 255, 255, 1);
    }

    .overlay {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(0deg, rgba(61, 20, 136, .5) 5%, rgba(0, 0, 0, .8) 20%, rgba(0, 0, 0, .3) 100%);
      /* bbackground-size: 20px 20px; */
      z-index: 0;
    }

    .home {
      background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
      color: #3D3D3D;
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
        background: rgba(61, 20, 136, 0.8);
      }

      pwa-install svg {
        fill: rgba(255, 255, 255, 0.8);
        width: 20px;
        height: 20px;
        margin: 4px 0px -2px 0px;
      }

      #schedule, .box {
        background: rgba(255, 255, 255, 0.2);
        border-bottom: 0px;
        margin-bottom: 16px;
      }

      fluent-card {
        padding: 1rem;
        color: #3D3D3D;
        border: 0px;
        border-radius: 0px;
        background: transparent;
        box-shadow: none;
      }

      fluent-card:hover {
        background: rgba(255, 255, 255, 0.4);
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
        --install-button-color: rgba(61, 20, 136, 1);
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
        fill: #3d3d3d;
        margin-bottom:-5px;
      }

      .title {
        font-weight: 500;
        font-size: clamp(20px, 3vw, 28px);
        color: rgba(61, 20, 136, 0.9);
      }

      #schedule fluent-card:hover .title {
        color: rgba(61, 20, 136, 1);
      }

      .details {
        display: flex;
        margin-top: 8px;
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

      .home {
        padding: 16px;
      }

      #playbar {
        margin: 0 auto 16px auto;
        text-align:center;
        display: none;
      }

     `}async firstUpdated(){console.log("\u6B22\u8FCE\u60A8!")}render(){if(this.jsondata){let n="";for(let e of this.jsondata.t2022)n+=`
          <fluent-card>
            <div class="time">${e.time}</div>
            <div class="divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>  
            </div>
            <div class="topic">
              <div class="title">${e.title}</div>
              <div class="details">
                <div class="avatar" id="icon_${e.iconid}"></div>
                <div class="description">
                  <div class="nametitle">${e.speaker} / ${e.pos}</div>
                  <div class="team">${e.com}</div>
                </div>
              </div>
            </div>
          </fluent-card>
        `;return O`
        <div>
          <div id="superhero">
            <video poster="/assets/img/video.png" autoplay="" playsinline="" loop="" muted="" src="/assets/img/vbg.mp4" id="herovideo"></video>
            <div class="overlay"></div>
          </div>
          <app-header-home></app-header-home>
        </div>
        
        <div class="home">
          <div id="playbar">
            <span id="playpromise">${this.playpromise}</span>
            <button id ="manualplay" @click="${this._playHeroVideo}">Play</button>
            <button id ="manualpause" @click="${this._pauseHeroVideo}">Pause</button>
          </div>
          <fluent-card class="box"> ${this.description} </fluent-card>
          <div id="schedule">
            ${Gi(n)}
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
      `}else return O`
        <div>No data</div>
      `}};W([A({type:String})],j.prototype,"description",2);W([A({type:Object})],j.prototype,"jsondata",2);W([et("#herovideo")],j.prototype,"_herovideo",2);W([et("#manualplay")],j.prototype,"_manualplay",2);W([et("#manualpause")],j.prototype,"_manualpause",2);W([A({type:String})],j.prototype,"playpromise",2);j=W([z("app-home")],j);var ur=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Cn=(n,e,t,i)=>{for(var r=i>1?void 0:i?fr(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&ur(e,t,r),r};let Ze=class extends E{constructor(){super(),this.enableBack=!1}static get styles(){return F`
     header {
      /* background-color: rgba(61, 20, 136, 1); */
      padding: 8px 16px 4px 16px;
     }

      header svg {
        height: 40px;
        width: 60px;
        display: inline-flex
      }

      .hf {
        align-self: center;
      }

      .share {
        cursor: pointer;
        margin-left: -33px;
      }

      .share svg {
        width: 24px;
        height: 24px;
        fill: rgba(61, 20, 136, 0.9);
      }

      .share:hover svg {
        fill: rgba(61, 20, 136, 1);
      }

      .hf svg {
        fill: rgba(61, 20, 136, 0.9);
      }

      .hf:hover svg {
        fill: rgba(61, 20, 136, 1);
      }

      tx {
        background-image: linear-gradient(45deg, #5d5da9 25%, #d806f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(61, 20, 136, 0.9);
      }

      .back:hover svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(61, 20, 136, 1);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(n){n.has("enableBack")&&console.log("enableBack",this.enableBack)}share(){navigator.share&&navigator.share({title:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",text:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",url:"https://pwadev.io"})}render(){return O`
      <header>
        <div id="back-button-block">
          ${this.enableBack?O`<fluent-anchor class="back" appearance="primary" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
          </fluent-anchor>`:null}
          <div class="hf">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill="#5A0FC8" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg>
          </div>
          <div class="hf">
            <a class="share" @click="${this.share}" title="分享 中国 PWA 开发者日">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"/></svg>
            </a>
          </div>
          <app-nav></app-nav>
        </div>
      </header>
    `}};Cn([A({type:Boolean})],Ze.prototype,"enableBack",2);Ze=Cn([z("app-header")],Ze);var gr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,pe=(n,e,t,i)=>{for(var r=i>1?void 0:i?mr(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&gr(e,t,r),r};let Q=class extends E{constructor(){super(),this.enableBack=!1,this.subtitle="\u7B2C\u4E8C\u5C4A",this.title="\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",this.time="8 \u6708 6 \u65E5 (\u5468\u516D) 13:00 - 17:00"}static get styles(){return F`
     header {
      height: 100vh;
      width: 100%;
      z-index: 1000;
     }

     .topbar {
      padding: 8px 16px 4px 16px;
     }

      header svg {
        height: 40px;
        width: 60px;
        display: inline-flex;
        z-index: 1000;
      }

      .hero {
        display: flex;
        text-align: center;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
        color: rgba(255, 255, 255, 0.9);
        height: 90vh;
        justify-content: center;
        align-items: center;
        z-index: 0;
      }

      .hero:hover {
        color: rgba(255, 255, 255, 1);
      }

      @media only screen and (max-width: 1024px) {
        .hero {
          flex-direction: column;
          flex-wrap: nowrap;
        }
      }

      @media only screen and (min-width: 1025px) {
        .hero {
          flex-direction: row;
          flex-wrap: nowrap;
        }
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
        z-index: 2;
      }
      .hero h3 {
        margin: 0rem auto;
        font-size: clamp(20px, 3vw, 28px);
        letter-spacing: 2px;
        z-index: 2;
      }

      .super {
        z-index: 0;
      }

      #sidepromote {

      }

      .hf {
        align-self: center;
        z-index: 1;
      }

      .share {
        cursor: pointer;
        margin-left: -33px;
      }

      .share svg {
        width: 24px;
        height: 24px;
        fill: rgba(255, 255, 255, 0.9);
      }

      .share:hover svg {
        fill: #fff;
      }

      .hf svg {
        fill: rgba(255, 255, 255, 0.9);
      }

      .hf:hover svg {
        fill: #fff;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(255, 255, 255, 0.9);
      }

      .back:hover svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(255, 255, 255, 1);
      }

      @media(prefers-color-scheme: light) {
      }

      .register {
        margin: 4rem auto;
        text-align: center;
      }

      .register a {
        display: inline-block;
        --startDeg: 0deg;
        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
        border: 3px solid hsl(100 100% 60%);
        border-image-slice: 1;
        border-image-source: conic-gradient(
          from var(--startDeg, 0deg),
          hsl(100 100% 60%), 
          hsl(200 100% 60%),
          hsl(100 100% 60%)
        );

        font-weight: 600;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.9);
        padding: 12px 36px;
        box-sizing: border-box;
        text-decoration: none;
      }

      .register a:hover {
        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.5);
        color: #fff;
        border-image-source: conic-gradient(
          hsl(100 100% 60%) 40%,
          hsl(200 100% 60%) 0
        );
        letter-spacing: 8px;
      }

      .coll {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }
      .coll svg path#ms {
        fill: rgba(255, 255, 255, 0.9);
      }

      #msft svg {
        height: 60px;
        width: 152px;
      }
      #intel {
        width: 98px;
        height: 38px;
        background: url('/assets/logo/intel-logo.png') no-repeat center center/cover;
        margin-top: -6px;
      }

      @media only screen and (max-width: 640px) {
        .coll {
          grid-column-gap: 16px;
        }

        #msft svg {
          height: 56px;
          width: 144px;
        }
        #intel {
          width: 80px;
          height: 32px;
        }
      }
    `}updated(n){n.has("enableBack")&&console.log("enableBack",this.enableBack)}share(){navigator.share&&navigator.share({title:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",text:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",url:"https://pwadev.io"})}render(){return O`
      <header>
        <div id="back-button-block" class="topbar">
          ${this.enableBack?O`<fluent-anchor class="back" appearance="primary" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
          </fluent-anchor>`:null}
          <div class="hf">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill="#5A0FC8" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg>
          </div>
          <div class="hf">
            <a class="share" @click="${this.share}" title="分享 中国 PWA 开发者日">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"/></svg>
            </a>
          </div>
          <app-nav-home></app-nav-home>
        </div>
        <div class="hero">
          <div class="super">
            <h3>${this.subtitle}</h3>
            <h2>${this.title}</h2>
            <h3 class="h3b">${this.time}</h3>
            <h1>在线 免费 分享</h1>
            <h1 class="h1b">助您使用 PWA 获得成功</h1>
            <div class="register">
              <a href="" title="即刻预约" id="book">
                即刻预约
              </a>
            </div>
            <h3>联合主办</h3>
            <div class="coll">
              <div></div>
              <div id="intel"></div>
              <div id="msft">
                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="534" viewBox="0 0 1033.746 220.695"><path id="ms" d="M1033.746 99.838v-18.18h-22.576V53.395l-.76.234-21.205 6.488-.418.127v21.415h-33.469v-11.93c0-5.555 1.242-9.806 3.69-12.641 2.431-2.801 5.908-4.225 10.343-4.225 3.188 0 6.489.751 9.811 2.232l.833.372V36.321l-.392-.144c-3.099-1.114-7.314-1.675-12.539-1.675-6.585 0-12.568 1.433-17.786 4.273-5.221 2.844-9.328 6.904-12.205 12.066-2.867 5.156-4.322 11.111-4.322 17.701v13.116h-15.72v18.18h15.72v76.589h22.567V99.838h33.469v48.671c0 20.045 9.455 30.203 28.102 30.203 3.064 0 6.289-.359 9.582-1.062 3.352-.722 5.635-1.443 6.979-2.213l.297-.176v-18.348l-.918.607c-1.225.816-2.75 1.483-4.538 1.979-1.796.505-3.296.758-4.458.758-4.368 0-7.6-1.177-9.605-3.5-2.028-2.344-3.057-6.443-3.057-12.177V99.838h22.575zM866.635 160.26c-8.191 0-14.649-2.716-19.2-8.066-4.579-5.377-6.899-13.043-6.899-22.783 0-10.049 2.32-17.914 6.901-23.386 4.554-5.436 10.95-8.195 19.014-8.195 7.825 0 14.054 2.635 18.516 7.836 4.484 5.228 6.76 13.03 6.76 23.196 0 10.291-2.14 18.196-6.36 23.484-4.191 5.248-10.493 7.914-18.732 7.914m1.003-80.885c-15.627 0-28.039 4.579-36.889 13.61-8.844 9.032-13.328 21.531-13.328 37.153 0 14.838 4.377 26.773 13.011 35.468 8.634 8.698 20.384 13.104 34.921 13.104 15.148 0 27.313-4.643 36.159-13.799 8.845-9.146 13.326-21.527 13.326-36.784 0-15.07-4.205-27.094-12.502-35.731-8.301-8.641-19.977-13.021-34.698-13.021m-86.602 0c-10.63 0-19.423 2.719-26.14 8.08-6.758 5.393-10.186 12.466-10.186 21.025 0 4.449.74 8.401 2.196 11.753 1.465 3.363 3.732 6.324 6.744 8.809 2.989 2.465 7.603 5.047 13.717 7.674 5.14 2.115 8.973 3.904 11.408 5.314 2.38 1.382 4.069 2.771 5.023 4.124.927 1.324 1.397 3.136 1.397 5.372 0 6.367-4.768 9.465-14.579 9.465-3.639 0-7.79-.76-12.337-2.258a46.347 46.347 0 0 1-12.634-6.406l-.937-.672v21.727l.344.16c3.193 1.474 7.219 2.717 11.964 3.695 4.736.979 9.039 1.477 12.777 1.477 11.535 0 20.824-2.732 27.602-8.125 6.821-5.43 10.278-12.67 10.278-21.525 0-6.388-1.861-11.866-5.529-16.284-3.643-4.382-9.966-8.405-18.785-11.961-7.026-2.82-11.527-5.161-13.384-6.958-1.79-1.736-2.699-4.191-2.699-7.3 0-2.756 1.122-4.964 3.425-6.752 2.321-1.797 5.552-2.711 9.604-2.711 3.76 0 7.607.594 11.433 1.758 3.823 1.164 7.181 2.723 9.984 4.63l.922.63v-20.61l-.354-.152c-2.586-1.109-5.996-2.058-10.138-2.828-4.123-.765-7.863-1.151-11.116-1.151m-95.157 80.885c-8.189 0-14.649-2.716-19.199-8.066-4.58-5.377-6.896-13.041-6.896-22.783 0-10.049 2.319-17.914 6.901-23.386 4.55-5.436 10.945-8.195 19.013-8.195 7.822 0 14.051 2.635 18.514 7.836 4.485 5.228 6.76 13.03 6.76 23.196 0 10.291-2.141 18.196-6.361 23.484-4.191 5.248-10.49 7.914-18.732 7.914m1.006-80.885c-15.631 0-28.044 4.579-36.889 13.61-8.844 9.032-13.331 21.531-13.331 37.153 0 14.844 4.38 26.773 13.014 35.468 8.634 8.698 20.383 13.104 34.92 13.104 15.146 0 27.314-4.643 36.16-13.799 8.843-9.146 13.326-21.527 13.326-36.784 0-15.07-4.206-27.094-12.505-35.731-8.303-8.641-19.977-13.021-34.695-13.021M602.409 98.07V81.658h-22.292v94.767h22.292v-48.477c0-8.243 1.869-15.015 5.557-20.13 3.641-5.054 8.493-7.615 14.417-7.615 2.008 0 4.262.331 6.703.986 2.416.651 4.166 1.358 5.198 2.102l.937.679V81.496l-.361-.155c-2.076-.882-5.013-1.327-8.729-1.327-5.602 0-10.615 1.8-14.909 5.344-3.769 3.115-6.493 7.386-8.576 12.712h-.237zm-62.213-18.695c-10.227 0-19.349 2.193-27.108 6.516-7.775 4.333-13.788 10.519-17.879 18.385-4.073 7.847-6.141 17.013-6.141 27.235 0 8.954 2.005 17.171 5.968 24.413 3.965 7.254 9.577 12.929 16.681 16.865 7.094 3.931 15.293 5.924 24.371 5.924 10.594 0 19.639-2.118 26.891-6.295l.293-.168v-20.423l-.937.684c-3.285 2.393-6.956 4.303-10.906 5.679-3.94 1.375-7.532 2.07-10.682 2.07-8.747 0-15.769-2.737-20.866-8.133-5.108-5.403-7.698-12.99-7.698-22.537 0-9.607 2.701-17.389 8.024-23.131 5.307-5.725 12.342-8.629 20.908-8.629 7.327 0 14.467 2.481 21.222 7.381l.935.679V84.371l-.302-.17c-2.542-1.423-6.009-2.598-10.313-3.489-4.286-.889-8.478-1.337-12.461-1.337m-66.481 2.284h-22.292v94.766h22.292V81.659zm-10.918-40.371c-3.669 0-6.869 1.249-9.498 3.724-2.64 2.482-3.979 5.607-3.979 9.295 0 3.63 1.323 6.698 3.938 9.114 2.598 2.409 5.808 3.63 9.54 3.63 3.731 0 6.953-1.221 9.582-3.626 2.646-2.42 3.988-5.487 3.988-9.118 0-3.559-1.306-6.652-3.879-9.195-2.571-2.538-5.833-3.824-9.692-3.824m-55.62 33.379v101.758h22.75V44.189H398.44l-40.022 98.221-38.839-98.221H286.81v132.235h21.379V74.657h.734l41.013 101.768h16.134l40.373-101.758h.734z" /><path d="M104.868 104.868H0V0h104.868v104.868z" fill="#f1511b"/><path d="M220.654 104.868H115.788V0h104.866v104.868z" fill="#80cc28"/><path d="M104.865 220.695H0V115.828h104.865v104.867z" fill="#00adef"/><path d="M220.654 220.695H115.788V115.828h104.866v104.867z" fill="#fbbc09"/></svg>
              </div>
              <div></div>
            </div>
          </div>
          <div id="sidepromote" class="super">
 
          </div>
        </div>
      </header>
    `}};pe([A({type:Boolean})],Q.prototype,"enableBack",2);pe([A({type:String})],Q.prototype,"subtitle",2);pe([A({type:String})],Q.prototype,"title",2);pe([A({type:String})],Q.prototype,"time",2);Q=pe([z("app-header-home")],Q);var vr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,En=(n,e,t,i)=>{for(var r=i>1?void 0:i?_r(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&vr(e,t,r),r};let Ke=class extends E{constructor(){super(),this.enableBack=!1}static get styles(){return F`

      
    #menuToggle
    {
      display: block;
      position: relative;
      top: 0px;
      right: 8px;
      height: 18px;
      width: 18px;
      
      z-index: 1;
      
      -webkit-user-select: none;
      user-select: none;
    }

    #menuToggle input
    {
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: -7px;
      left: -5px;
      
      cursor: pointer;
      
      opacity: 0;
      z-index: 2;
      
      -webkit-touch-callout: none;
    }

    #menuToggle span
    {
      display: block;
      width: 24px;
      height: 3px;
      margin-bottom: 4px;
      position: relative;
      
      background: rgba(61, 20, 136, 0.9);
      border-radius: 3px;
      
      z-index: 1;
      
      transform-origin: 4px 0px;
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    #menuToggle:hover span {
      background: rgba(61, 20, 136, 1);
    }

    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(0px, 0px);
      background: rgba(61, 20, 136, 0.9);
    }

    #menuToggle:hover input:checked ~ span
    {
      background: rgba(61, 20, 136, 1);
    }

    #menuToggle input:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.1, 0.1);
    }

    #menuToggle input:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(1px, 0px);
    }

    #menu
    {
      position: fixed;
      top: 0px;
      width: 30vw;
      height: 100vh;
      margin: 0px 0px 0px -100vw;
      text-align: center;
      
      background: rgba(255, 255, 255, 0.98);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      
      transform-origin: 0% 0%;
      transform: translate(-100%, 0);
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 1px 9px -2px rgba(0,0,0,0.75);
    }

    #menu div {
      display: block;
      width: 100%;
      padding: 1rem 0px;
    }

    #menu div:hover
    {
      background: rgba(61, 20, 136, 1);
    }

    #menu div:hover fluent-anchor, #menu .promote:hover div {
      color: #fff;
    }

    #menu fluent-anchor {
      font-size: clamp(18px, 3vw, 32px);
      transition: color 0.3s ease;
      color: rgba(61, 20, 136, 1);
      margin: 0px auto;
    }

    #menuToggle input:checked ~ #menu
    {
      transform: translate(3vw, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    @media only screen and (max-width: 640px) {
      #menu
      {
        width: 62vw;
      }
      #menuToggle input:checked ~ #menu
      {
        transform: translate(10.5vw, 0);
      }
    }
    .promote div {
      font-size: 12px;
      height: 12px;
      font-weight: 500;
      padding: 0px !important;
    }
    .promote svg {
      width: 20px;
      height: 20px;
      margin-bottom: -2px;
    }

    `}render(){return O`
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div id="menu"> 
          <div><fluent-anchor href="/2022" appearance="primary">2022</fluent-anchor></div>
          <div><fluent-anchor href="/2021" appearance="primary">2021</fluent-anchor></div>
          <div><fluent-anchor href="/news" appearance="primary">新闻</fluent-anchor></div>
          <div><fluent-anchor href="/tutorial" appearance="primary">教程</fluent-anchor></div>
          <div><fluent-anchor href="/sample" appearance="primary">示例</fluent-anchor></div>
          <div class="promote">
            <div>推荐访问</div>
            <fluent-anchor href="https://pwasummit.org/" appearance="primary">
              PWA Summit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
            </fluent-anchor>
            <div>全球 PWA 峰会 2022 亦将于 10 月举行</div>
          </div>
        </div>
      </div>
    </nav>
    `}};En([A({type:Boolean})],Ke.prototype,"enableBack",2);Ke=En([z("app-nav")],Ke);var yr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,An=(n,e,t,i)=>{for(var r=i>1?void 0:i?br(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&yr(e,t,r),r};let Ge=class extends E{constructor(){super(),this.enableBack=!1}static get styles(){return F`

      
    #menuToggle
    {
      display: block;
      position: relative;
      top: 0px;
      right: 8px;
      height: 18px;
      width: 18px;
      
      z-index: 1;
      
      -webkit-user-select: none;
      user-select: none;
    }

    #menuToggle input
    {
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: -7px;
      left: -5px;
      
      cursor: pointer;
      
      opacity: 0;
      z-index: 2;
      
      -webkit-touch-callout: none;
    }

    #menuToggle span
    {
      display: block;
      width: 24px;
      height: 3px;
      margin-bottom: 4px;
      position: relative;
      
      background: rgba(255, 255, 255, 0.9);
      border-radius: 3px;
      
      z-index: 1;
      
      transform-origin: 4px 0px;
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    #menuToggle:hover span {
      background: rgba(255, 255, 255, 1);
    }

    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(0px, 0px);
      background: rgba(255, 255, 255, 0.9);
    }

    #menuToggle:hover input:checked ~ span
    {
      background: rgba(255, 255, 255, 1);
    }

    #menuToggle input:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.1, 0.1);
    }

    #menuToggle input:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(1px, 0px);
    }

    #menu
    {
      position: fixed;
      top: 0px;
      width: 30vw;
      height: 100vh;
      margin: 0px 0px 0px -100vw;
      text-align: center;
      
      background: rgba(255, 255, 255, 0.98);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      
      transform-origin: 0% 0%;
      transform: translate(-100%, 0);
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 1px 9px -2px rgba(0,0,0,0.75);
    }

    #menu div {
      display: block;
      width: 100%;
      padding: 1rem 0px;
    }

    #menu div:hover
    {
      background: rgba(61, 20, 136, 1);
    }

    #menu div:hover fluent-anchor, #menu .promote:hover div {
      color: #fff;
    }

    #menu fluent-anchor {
      font-size: clamp(18px, 3vw, 32px);
      transition: color 0.3s ease;
      color: rgba(61, 20, 136, 1);
      margin: 0px auto;
    }

    #menuToggle input:checked ~ #menu
    {
      transform: translate(3vw, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    @media only screen and (max-width: 640px) {
      #menu
      {
        width: 62vw;
      }
      #menuToggle input:checked ~ #menu
      {
        transform: translate(10.5vw, 0);
      }
    }
    .promote div {
      font-size: 12px;
      height: 12px;
      font-weight: 500;
      padding: 0px !important;
    }
    .promote svg {
      width: 20px;
      height: 20px;
      margin-bottom: -2px;
    }

    `}render(){return O`
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div id="menu"> 
          <div><fluent-anchor href="/2022" appearance="primary">2022</fluent-anchor></div>
          <div><fluent-anchor href="/2021" appearance="primary">2021</fluent-anchor></div>
          <div><fluent-anchor href="/news" appearance="primary">新闻</fluent-anchor></div>
          <div><fluent-anchor href="/tutorial" appearance="primary">教程</fluent-anchor></div>
          <div><fluent-anchor href="/sample" appearance="primary">示例</fluent-anchor></div>
          <div class="promote">
            <div>推荐访问</div>
            <fluent-anchor href="https://pwasummit.org/" appearance="primary">
              PWA Summit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
            </fluent-anchor>
            <div>全球 PWA 峰会 2022 亦将于 10 月举行</div>
          </div>
        </div>
      </div>
    </nav>
    `}};An([A({type:Boolean})],Ge.prototype,"enableBack",2);Ge=An([z("app-nav-home")],Ge);var wr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Sn=(n,e,t,i)=>{for(var r=i>1?void 0:i?xr(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&wr(e,t,r),r};let Je=class extends E{constructor(){super(),this.enableBack=!1}static get styles(){return F`
      app-footer {
        background: transparent !important;
      }

      footer {
        padding: 0 16px 16px 16px;
        font-size: 14px;
        background: transparent;
      }

      .suggest {
        margin: 0px auto;
        text-align: center;
        padding: 16px;
      }
      
      footer a {
        color: rgba(61, 20, 136, 0.9);
        text-decoration: none;
        margin: 0 4px;
      }

      footer a:hover {
        color: rgba(61, 20, 136, 1.0);
        border-bottom: 1px dashed rgba(61, 20, 136, 1);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(n){n.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return O`
      <footer>
        <div class="suggest">
        <a href="/code-of-conduct" appearance="primary" title="行为准则">行为准则</a>
        <a href="/privacy" appearance="primary" title="隐私">隐私</a>
        <a href="/about" appearance="primary" title="关于">关于</a>  
        </div>
        <div>&copy;2022 <a href="https://pwadev.io" title="中国 PWA 开发者日">中国 PWA 开发者日</a></div>
      </footer>
    `}};Sn([A({type:Boolean})],Je.prototype,"enableBack",2);Je=Sn([z("app-footer")],Je);var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Pn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Cr(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&$r(e,t,r),r};let Ye=class extends E{constructor(){super(),this.enableBack=!1}static get styles(){return F`

      footer {
        padding: 0 0px 16px 0px;
        font-size: 14px;
      }

      .suggest {
        margin: 0px auto;
        text-align: center;
        padding: 16px;
      }

      footer a {
        color: rgba(61, 20, 136, 0.9);
        text-decoration: none;
        margin: 0 4px;
      }

      footer a:hover {
        color: rgba(61, 20, 136, 1.0);
        border-bottom: 1px dashed rgba(61, 20, 136, 1);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(n){n.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return O`
      <footer>
        <div class="suggest">
        <a href="/code-of-conduct" appearance="primary" title="行为准则">行为准则</a>
        <a href="/privacy" appearance="primary" title="隐私">隐私</a>
        <a href="/about" appearance="primary" title="关于">关于</a>  
        </div>
        <div>&copy;2022 <a href="https://pwadev.io" title="中国 PWA 开发者日">中国 PWA 开发者日</a></div>
      </footer>
    `}};Pn([A({type:Boolean})],Ye.prototype,"enableBack",2);Ye=Pn([z("app-footer-home")],Ye);var Er=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Sr=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ar(e,t):e,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(e,t,r):s(r))||r);return i&&r&&Er(e,t,r),r};let Wt=class extends E{static get styles(){return F`
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var e;new U((e=this.shadowRoot)==null?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/2022",component:"app-2022",action:async()=>{await R(()=>import("./app-2022.3bd6d9f5.js"),[])}},{path:"/2021",children:[{path:"/",component:"app-2021",action:async()=>{await R(()=>import("./app-2021.baef8ca4.js"),[])}},{path:"/:topic",component:"app-2021",action:async()=>{await R(()=>import("./app-2021.baef8ca4.js"),[])}}]},{path:"/mp",component:"app-mediaplayer",action:async()=>{await R(()=>import("./app-mediaplayer.012fe8fd.js"),[])}},{path:"/about",component:"app-about",action:async()=>{await R(()=>import("./app-about.5aabac12.js"),[])}},{path:"/news",component:"app-news",action:async()=>{await R(()=>import("./app-news.228e20eb.js"),[])}},{path:"/sample",component:"app-sample",action:async()=>{await R(()=>import("./app-sample.1a7fe002.js"),[])}},{path:"/tutorial",component:"app-tutorial",action:async()=>{await R(()=>import("./app-tutorial.b6d8af37.js"),[])}},{path:"/code-of-conduct",component:"app-coc",action:async()=>{await R(()=>import("./app-coc.d1c22b23.js"),[])}},{path:"/privacy",component:"app-privacy",action:async()=>{await R(()=>import("./app-privacy.430c3e32.js"),[])}}]}]),Wi({immediate:!0})}render(){return O`
      <main id="routerOutlet">
      </main>
    `}};Wt=Sr([z("app-index")],Wt);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");export{O as $,A as e,z as n,Gi as o,F as r,E as s};
//# sourceMappingURL=index.e832ed51.js.map
