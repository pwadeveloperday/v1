var $i=Object.defineProperty,Ei=Object.defineProperties;var Si=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var Ai=Object.prototype.hasOwnProperty,Ci=Object.prototype.propertyIsEnumerable;var Xe=(i,e,t)=>e in i?$i(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Qe=(i,e)=>{for(var t in e||(e={}))Ai.call(e,t)&&Xe(i,t,e[t]);if(Ye)for(var t of Ye(e))Ci.call(e,t)&&Xe(i,t,e[t]);return i},et=(i,e)=>Ei(i,Si(e));const Pi=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Pi();const ki="modulepreload",tt={},Li="/",B=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Li}${n}`,n in tt)return;tt[n]=!0;const r=n.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":ki,r||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),r)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol(),it=new Map;class It{constructor(e,t){if(this._$cssResult$=!0,t!==qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=it.get(this.cssText);return We&&e===void 0&&(it.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Ti=i=>new It(typeof i=="string"?i:i+"",qe),le=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new It(t,qe)},Ri=(i,e)=>{We?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=window.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},nt=We?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ti(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const rt=window.trustedTypes,Oi=rt?rt.emptyScript:"",st=window.reactiveElementPolyfillSupport,Ne={toAttribute(i,e){switch(e){case Boolean:i=i?Oi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ft=(i,e)=>e!==i&&(e==e||i==i),Ee={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:Ft};class z extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Eh(n,t);r!==void 0&&(this._$Eu.set(r,n),e.push(r))}),e}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ee}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(nt(r))}else e!==void 0&&t.push(nt(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ri(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=Ee){var r,s;const o=this.constructor._$Eh(e,n);if(o!==void 0&&n.reflect===!0){const c=((s=(r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&s!==void 0?s:Ne.toAttribute)(t,n.type);this._$Ei=e,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$Ei=null}}_$AK(e,t){var n,r,s;const o=this.constructor,c=o._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){const a=o.getPropertyOptions(c),l=a.converter,h=(s=(r=(n=l)===null||n===void 0?void 0:n.fromAttribute)!==null&&r!==void 0?r:typeof l=="function"?l:null)!==null&&s!==void 0?s:Ne.fromAttribute;this._$Ei=c,this[c]=h(t,a.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ft)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,s)=>this[s]=r),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$ES(n,this[n],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}z.finalized=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:z}),(($e=globalThis.reactiveElementVersions)!==null&&$e!==void 0?$e:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;const W=globalThis.trustedTypes,ot=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,zt="?"+O,Ni=`<${zt}>`,q=document,ie=(i="")=>q.createComment(i),ne=i=>i===null||typeof i!="object"&&typeof i!="function",Ht=Array.isArray,Mi=i=>{var e;return Ht(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ct=/'/g,dt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,Ui=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),K=Ui(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ht=new WeakMap,Bi=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new ce(e.insertBefore(ie(),c),c,void 0,t!=null?t:{})}return o._$AI(i),o},V=q.createTreeWalker(q,129,null,!1),Di=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=X;for(let a=0;a<t;a++){const l=i[a];let h,d,u=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===X?d[1]==="!--"?o=at:d[1]!==void 0?o=lt:d[2]!==void 0?(Vt.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=D):d[3]!==void 0&&(o=D):o===D?d[0]===">"?(o=r!=null?r:X,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?D:d[3]==='"'?dt:ct):o===dt||o===ct?o=D:o===at||o===lt?o=X:(o=D,r=void 0);const v=o===D&&i[a+1].startsWith("/>")?" ":"";s+=o===X?l+Ni:u>=0?(n.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+O+v):l+O+(u===-2?(n.push(void 0),a):v)}const c=s+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ot!==void 0?ot.createHTML(c):c,n]};class re{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Di(e,t);if(this.el=re.createElement(l,n),V.currentNode=this.el.content,t===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(r=V.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(O)){const p=h[o++];if(d.push(u),p!==void 0){const v=r.getAttribute(p.toLowerCase()+"$lit$").split(O),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:f[2],strings:v,ctor:f[1]==="."?Ii:f[1]==="?"?zi:f[1]==="@"?Hi:we})}else a.push({type:6,index:s})}for(const u of d)r.removeAttribute(u)}if(Vt.test(r.tagName)){const d=r.textContent.split(O),u=d.length-1;if(u>0){r.textContent=W?W.emptyScript:"";for(let p=0;p<u;p++)r.append(d[p],ie()),V.nextNode(),a.push({type:2,index:++s});r.append(d[u],ie())}}}else if(r.nodeType===8)if(r.data===zt)a.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:s}),d+=O.length-1}s++}}static createElement(e,t){const n=q.createElement("template");return n.innerHTML=e,n}}function J(i,e,t=i,n){var r,s,o,c;if(e===Z)return e;let a=n!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[n]:t._$Cu;const l=ne(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[n]=a:t._$Cu=a),a!==void 0&&(e=J(i,a._$AS(i,e.values),a,n)),e}class ji{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(n,!0);V.currentNode=s;let o=V.nextNode(),c=0,a=0,l=r[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new ce(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new Vi(o,this,e)),this.v.push(h),l=r[++a]}c!==(l==null?void 0:l.index)&&(o=V.nextNode(),c++)}return s}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ce{constructor(e,t,n,r){var s;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),ne(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Z&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Mi(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==b&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.k(q.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=re.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(n);else{const o=new ji(s,this),c=o.p(this.options);o.m(n),this.k(c),this._$AH=o}}_$AC(e){let t=ht.get(e.strings);return t===void 0&&ht.set(e.strings,t=new re(e)),t}S(e){Ht(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ce(this.M(ie()),this.M(ie()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class we{constructor(e,t,n,r,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=J(this,e,t,0),o=!ne(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=J(this,c[n+a],t,a),l===Z&&(l=this._$AH[a]),o||(o=!ne(l)||l!==this._$AH[a]),l===b?e=b:e!==b&&(e+=(l!=null?l:"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.C(e)}C(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ii extends we{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===b?void 0:e}}const Fi=W?W.emptyScript:"";class zi extends we{constructor(){super(...arguments),this.type=4}C(e){e&&e!==b?this.element.setAttribute(this.name,Fi):this.element.removeAttribute(this.name)}}class Hi extends we{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=J(this,e,t,0))!==null&&n!==void 0?n:b)===Z)return;const r=this._$AH,s=e===b&&r!==b||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==b&&(r===b||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Vi{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ut=window.litHtmlPolyfillSupport;ut==null||ut(re,ce),((Se=globalThis.litHtmlVersions)!==null&&Se!==void 0?Se:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae,Ce;class L extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Bi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Z}}L.finalized=!0,L._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:L});const pt=globalThis.litElementPolyfillSupport;pt==null||pt({LitElement:L});((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){window.customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?et(Qe({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function U(i){return(e,t)=>t!==void 0?((n,r,s)=>{r.constructor.createProperty(s,n)})(i,e,t):Wi(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;((Pe=window.HTMLSlotElement)===null||Pe===void 0?void 0:Pe.prototype.assignedElements)!=null;function me(i){return i=i||[],Array.isArray(i)?i:[i]}function P(i){return`[Vaadin.Router] ${i}`}function qi(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const ge="module",_e="nomodule",Me=[ge,_e];function ft(i){if(!i.match(/.+\.[m]?js$/))throw new Error(P(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Wt(i){if(!i||!C(i.path))throw new Error(P('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!j(i.action)&&!Array.isArray(i.children)&&!j(i.children)&&!ye(e)&&!t.some(n=>C(i[n])))throw new Error(P(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(C(e))ft(e);else if(Me.some(n=>n in e))Me.forEach(n=>n in e&&ft(e[n]));else throw new Error(P('Expected route bundle to include either "'+_e+'" or "'+ge+'" keys, or both'));i.redirect&&["bundle","component"].forEach(n=>{n in i&&console.warn(P(`Route config "${i.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function vt(i){me(i).forEach(e=>Wt(e))}function mt(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===ge?t.setAttribute("type",ge):e===_e&&t.setAttribute(_e,""),t.async=!0),new Promise((n,r)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),r(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function Ki(i){return C(i)?mt(i):Promise.race(Me.filter(e=>e in i).map(e=>mt(i[e],e)))}function ee(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function ye(i){return typeof i=="object"&&!!i}function j(i){return typeof i=="function"}function C(i){return typeof i=="string"}function qt(i){const e=new Error(P(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const H=new class{};function Zi(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function gt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Zi(e))!==window.location.origin)return;const{pathname:r,search:s,hash:o}=e;ee("go",{pathname:r,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const Ji={activate(){window.document.addEventListener("click",gt)},inactivate(){window.document.removeEventListener("click",gt)}},Gi=/Trident/.test(navigator.userAgent);Gi&&!j(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function _t(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;ee("go",{pathname:e,search:t,hash:n})}const Yi={activate(){window.addEventListener("popstate",_t)},inactivate(){window.removeEventListener("popstate",_t)}};var G=Xt,Xi=Ke,Qi=rn,en=Jt,tn=Yt,Kt="/",Zt="./",nn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ke(i,e){for(var t=[],n=0,r=0,s="",o=e&&e.delimiter||Kt,c=e&&e.delimiters||Zt,a=!1,l;(l=nn.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=i.slice(r,u),r=u+h.length,d){s+=d[1],a=!0;continue}var p="",v=i[r],f=l[2],w=l[3],S=l[4],$=l[5];if(!a&&s.length){var x=s.length-1;c.indexOf(s[x])>-1&&(p=s[x],s=s.slice(0,x))}s&&(t.push(s),s="",a=!1);var bi=p!==""&&v!==void 0&&v!==p,wi=$==="+"||$==="*",xi=$==="?"||$==="*",Je=p||o,Ge=w||S;t.push({name:f||n++,prefix:p,delimiter:Je,optional:xi,repeat:wi,partial:bi,pattern:Ge?sn(Ge):"[^"+R(Je)+"]+?"})}return(s||r<i.length)&&t.push(s+i.substr(r)),t}function rn(i,e){return Jt(Ke(i,e))}function Jt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(n,r){for(var s="",o=r&&r.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){s+=a;continue}var l=n?n[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function R(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function sn(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Gt(i){return i&&i.sensitive?"":"i"}function on(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function an(i,e,t){for(var n=[],r=0;r<i.length;r++)n.push(Xt(i[r],e,t).source);return new RegExp("(?:"+n.join("|")+")",Gt(t))}function ln(i,e,t){return Yt(Ke(i,t),e,t)}function Yt(i,e,t){t=t||{};for(var n=t.strict,r=t.start!==!1,s=t.end!==!1,o=R(t.delimiter||Kt),c=t.delimiters||Zt,a=[].concat(t.endsWith||[]).map(R).concat("$").join("|"),l=r?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=R(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+R(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=R(u.prefix)+"("+p+")?":l+="(?:"+R(u.prefix)+"("+p+"))?":l+=R(u.prefix)+"("+p+")"}}return s?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Gt(t))}function Xt(i,e,t){return i instanceof RegExp?on(i,e):Array.isArray(i)?an(i,e,t):ln(i,e,t)}G.parse=Xi;G.compile=Qi;G.tokensToFunction=en;G.tokensToRegExp=tn;const{hasOwnProperty:cn}=Object.prototype,Ue=new Map;Ue.set("|false",{keys:[],pattern:/(?:)/});function yt(i){try{return decodeURIComponent(i)}catch{return i}}function dn(i,e,t,n,r){t=!!t;const s=`${i}|${t}`;let o=Ue.get(s);if(!o){const l=[];o={keys:l,pattern:G(i,l,{end:t,strict:i===""})},Ue.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!cn.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(yt):[]:a[d]=u&&yt(u))}return{path:c[0],keys:(n||[]).concat(o.keys),params:a}}function Qt(i,e,t,n,r){let s,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!s&&(s=dn(a,e,!h,n,r),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Qt(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function hn(i){if(j(i.route.action))return i.route.action(i)}function un(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function pn(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function fn(i,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const r={path:n,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(r)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||hn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){vt(e);const t=[...me(e)];this.root.__children=t}addRoutes(e){return vt(e),this.root.__children.push(...me(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,C(e)?{pathname:e}:e),n=Qt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||n.next(u),o=null,!l&&(s.done||!un(h,s.value.route))?(o=s,Promise.resolve(H)):s.done?Promise.reject(qt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),fn(c,s.value),Promise.resolve(r(c)).then(p=>p!=null&&p!==H?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=pn(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}se.pathToRegexp=G;const{pathToRegexp:bt}=se,wt=new Map;function ei(i,e,t){const n=e.name||e.component;if(n&&(i.has(n)?i.get(n).push(e):i.set(n,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const s=t[r];s.parent=e,ei(i,s,s.__children||s.children)}}function xt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function $t(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function vn(i,e={}){if(!(i instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,r)=>{let s=xt(t,n);if(!s&&(t.clear(),ei(t,i.root,i.root.__children),s=xt(t,n),!s))throw new Error(`Route "${n}" not found`);let o=wt.get(s.fullPath);if(!o){let a=$t(s),l=s.parent;for(;l;){const p=$t(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=bt.parse(a),d=bt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)C(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},wt.set(a,o),s.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=r[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let Et=[];function mn(i){Et.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),Et=i}const gn=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},_n=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function St(i,e){return i.classList.add(e),new Promise(t=>{if(gn(i)){const n=i.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;i.setAttribute("style",`position: absolute; ${r}`),_n(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const yn=256;function ke(i){return i!=null}function bn(i){const e=Object.assign({},i);return delete e.next,e}function A({pathname:i="",search:e="",hash:t="",chain:n=[],params:r={},redirectFrom:s,resolver:o},c){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:s,getUrl:(l={})=>fe(M.pathToRegexp.compile(ti(a))(Object.assign({},r,l)),o)}}function At(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function wn(i,e){e.location=A(i);const t=i.chain.map(n=>n.route).indexOf(i.route);return i.chain[t].element=e,e}function pe(i,e,t){if(j(i))return i.apply(t,e)}function Ct(i,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return pe(t[i],e,t)}}function xn(i,e){if(!Array.isArray(i)&&!ye(i))throw new Error(P(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=me(i);for(let n=0;n<t.length;n++)Wt(t[n]),e.__children.push(t[n])}function he(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function fe(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function ti(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class M extends se{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&se.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=M.NavigationTrigger;M.setTriggers.apply(M,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=A({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();j(t.children)&&(n=n.then(()=>t.children(bn(e))).then(s=>{!ke(s)&&!j(t.children)&&(s=t.children),xn(s,t)}));const r={redirect:s=>At(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return pe(t.action,[e,r],t)}).then(s=>{if(ke(s)&&(s instanceof HTMLElement||s.redirect||s===H))return s;if(C(t.redirect))return r.redirect(t.redirect);if(t.bundle)return Ki(t.bundle).then(()=>{},()=>{throw new Error(P(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(ke(s))return s;if(C(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},C(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=A(s),t&&this.__updateBrowserHistory(s,n===1),ee("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),he(this.__outlet&&this.__outlet.children),this.location=A(Object.assign(r,{resolver:this})),ee("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,c=fe(ti(n.chain),n.resolver)===n.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===H?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(n).then(l=>{if(l===null||l===H)throw qt(s);return l&&l!==H&&l!==n?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(wn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(P(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${qi(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>At(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,r.length)&&!(n[a].route!==r[a].route||n[a].path!==r[a].path&&n[a].element!==r[a].element||!this.__isReusableElement(n[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<r.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),n[a].element.location=A(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=A(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=A(e,r[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const s=A(t);return e.then(o=>{if(this.__isLatestRender(t))return Ct("onBeforeLeave",[s,n,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,r){const s=A(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Ct("onBeforeEnter",[s,n,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>yn)throw new Error(P(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(P(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s)if(s.parentNode===n)e.chain[r].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&he(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(he(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(!!t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(!!r)try{const s=A(e);pe(r.onAfterLeave,[s,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&he(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=A(e,e.chain[t].route);pe(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&n&&o){const c=ye(o)&&o.leave||"leaving",a=ye(o)&&o.enter||"entering";r.push(St(t,c)),r.push(St(n,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;C(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){mn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=vn(this)),fe(this.__urlForName(e,t),this)}urlForPath(e,t){return fe(M.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=C(e)?this.__createUrl(e,"http://a"):e;return ee("go",{pathname:t,search:n,hash:r})}}const $n=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ve=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function En(){function i(){return!0}return ii(i)}function Sn(){try{return An()?!0:Cn()?ve?!Pn():!En():!1}catch{return!1}}function An(){return localStorage.getItem("vaadin.developmentmode.force")}function Cn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Pn(){return!!(ve&&Object.keys(ve).map(e=>ve[e]).filter(e=>e.productionMode).length>0)}function ii(i,e){if(typeof i!="function")return;const t=$n.exec(i.toString());if(t)try{i=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return i(e)}window.Vaadin=window.Vaadin||{};const Pt=function(i,e){if(window.Vaadin.developmentMode)return ii(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Sn());function kn(){}const Ln=function(){if(typeof Pt=="function")return Pt(kn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ln();M.NavigationTrigger={POPSTATE:Yi,CLICK:Ji};try{self["workbox:window:6.5.2"]&&_()}catch{}function kt(i,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(r){t(r.data)},i.postMessage(e,[n.port2])})}function Tn(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Lt(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Rn(i,e){var t;if(typeof Symbol=="undefined"||i[Symbol.iterator]==null){if(Array.isArray(i)||(t=function(r,s){if(r){if(typeof r=="string")return Lt(r,s);var o=Object.prototype.toString.call(r).slice(8,-1);return o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set"?Array.from(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Lt(r,s):void 0}}(i))||e&&i&&typeof i.length=="number"){t&&(i=t);var n=0;return function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=i[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Le=function(){var i=this;this.promise=new Promise(function(e,t){i.resolve=e,i.reject=t})};function Te(i,e){var t=location.href;return new URL(i,t).href===new URL(e,t).href}var Q=function(i,e){this.type=i,Object.assign(this,e)};function ue(i,e,t){return t?e?e(i):i:(i&&i.then||(i=Promise.resolve(i)),e?i.then(e):i)}function On(){}var Nn={type:"SKIP_WAITING"};function Tt(i,e){if(!e)return i&&i.then?i.then(On):Promise.resolve()}var Mn=function(i){var e,t;function n(c,a){var l,h;return a===void 0&&(a={}),(l=i.call(this)||this).nn={},l.tn=0,l.rn=new Le,l.en=new Le,l.on=new Le,l.un=0,l.an=new Set,l.cn=function(){var d=l.fn,u=d.installing;l.tn>0||!Te(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,d.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(d){var u=l.fn,p=d.target,v=p.state,f=p===l.vn,w={sw:p,isExternal:f,originalEvent:d};!f&&l.mn&&(w.isUpdate=!0),l.dispatchEvent(new Q(v,w)),v==="installed"?l.wn=self.setTimeout(function(){v==="installed"&&u.waiting===p&&l.dispatchEvent(new Q("waiting",w))},200):v==="activating"&&(clearTimeout(l.wn),f||l.en.resolve(p))},l.dn=function(d){var u=l.hn,p=u!==navigator.serviceWorker.controller;l.dispatchEvent(new Q("controlling",{isExternal:p,originalEvent:d,sw:u,isUpdate:l.mn})),p||l.on.resolve(u)},l.gn=(h=function(d){var u=d.data,p=d.ports,v=d.source;return ue(l.getSW(),function(){l.an.has(v)&&l.dispatchEvent(new Q("message",{data:u,originalEvent:d,ports:p,sw:v}))})},function(){for(var d=[],u=0;u<arguments.length;u++)d[u]=arguments[u];try{return Promise.resolve(h.apply(this,d))}catch(p){return Promise.reject(p)}}),l.sn=c,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}t=i,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r,s,o=n.prototype;return o.register=function(c){var a=(c===void 0?{}:c).immediate,l=a!==void 0&&a;try{var h=this;return function(d,u){var p=d();return p&&p.then?p.then(u):u(p)}(function(){if(!l&&document.readyState!=="complete")return Tt(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return h.mn=Boolean(navigator.serviceWorker.controller),h.yn=h.pn(),ue(h.bn(),function(d){h.fn=d,h.yn&&(h.hn=h.yn,h.en.resolve(h.yn),h.on.resolve(h.yn),h.yn.addEventListener("statechange",h.ln,{once:!0}));var u=h.fn.waiting;return u&&Te(u.scriptURL,h.sn.toString())&&(h.hn=u,Promise.resolve().then(function(){h.dispatchEvent(new Q("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),h.hn&&(h.rn.resolve(h.hn),h.an.add(h.hn)),h.fn.addEventListener("updatefound",h.cn),navigator.serviceWorker.addEventListener("controllerchange",h.dn),h.fn})})}catch(d){return Promise.reject(d)}},o.update=function(){try{return this.fn?Tt(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(c){try{return ue(this.getSW(),function(a){return kt(a,c)})}catch(a){return Promise.reject(a)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&kt(this.fn.waiting,Nn)},o.pn=function(){var c=navigator.serviceWorker.controller;return c&&Te(c.scriptURL,this.sn.toString())?c:void 0},o.bn=function(){try{var c=this;return function(a,l){try{var h=a()}catch(d){return l(d)}return h&&h.then?h.then(void 0,l):h}(function(){return ue(navigator.serviceWorker.register(c.sn,c.nn),function(a){return c.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=n,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Tn(r.prototype,s),n}(function(){function i(){this.Pn=new Map}var e=i.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,r=Rn(this.Sn(t.type));!(n=r()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},i}());function Un(i={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:r,onRegisterError:s}=i;let o;const c=async(a=!0)=>{};return"serviceWorker"in navigator&&(o=new Mn("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",a=>{a.isUpdate?window.location.reload():n==null||n()}),o.register({immediate:e}).then(a=>{r==null||r(a)}).catch(a=>{s==null||s(a)})),c}/**
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
 */const Rt=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Be=(i,e,t=null)=>{for(;e!==t;){const n=e.nextSibling;i.removeChild(e),e=n}},T=`{{lit-${String(Math.random()).slice(2)}}}`,ni=`<!--${T}-->`,Ot=new RegExp(`${T}|${ni}`);class ri{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],s=document.createTreeWalker(t.content,133,null,!1);let o=0,c=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const d=s.nextNode();if(d!==null){if(c++,d.nodeType===1){if(d.hasAttributes()){const u=d.attributes,{length:p}=u;let v=0;for(let f=0;f<p;f++)Nt(u[f].name,"$lit$")&&v++;for(;v-- >0;){const f=l[a],w=De.exec(f)[2],S=w.toLowerCase()+"$lit$",$=d.getAttribute(S);d.removeAttribute(S);const x=$.split(Ot);this.parts.push({type:"attribute",index:c,name:w,strings:x}),a+=x.length-1}}d.tagName==="TEMPLATE"&&(r.push(d),s.currentNode=d.content)}else if(d.nodeType===3){const u=d.data;if(u.indexOf(T)>=0){const p=d.parentNode,v=u.split(Ot),f=v.length-1;for(let w=0;w<f;w++){let S,$=v[w];if($==="")S=N();else{const x=De.exec($);x!==null&&Nt(x[2],"$lit$")&&($=$.slice(0,x.index)+x[1]+x[2].slice(0,-5)+x[3]),S=document.createTextNode($)}p.insertBefore(S,d),this.parts.push({type:"node",index:++c})}v[f]===""?(p.insertBefore(N(),d),n.push(d)):d.data=v[f],a+=f}}else if(d.nodeType===8)if(d.data===T){const u=d.parentNode;d.previousSibling!==null&&c!==o||(c++,u.insertBefore(N(),d)),o=c,this.parts.push({type:"node",index:c}),d.nextSibling===null?d.data="":(n.push(d),c--),a++}else{let u=-1;for(;(u=d.data.indexOf(T,u+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=r.pop()}for(const d of n)d.parentNode.removeChild(d)}}const Nt=(i,e)=>{const t=i.length-e.length;return t>=0&&i.slice(t)===e},si=i=>i.index!==-1,N=()=>document.createComment(""),De=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Mt(i,e){const{element:{content:t},parts:n}=i,r=document.createTreeWalker(t,133,null,!1);let s=te(n),o=n[s],c=-1,a=0;const l=[];let h=null;for(;r.nextNode();){c++;const d=r.currentNode;for(d.previousSibling===h&&(h=null),e.has(d)&&(l.push(d),h===null&&(h=d)),h!==null&&a++;o!==void 0&&o.index===c;)o.index=h!==null?-1:o.index-a,s=te(n,s),o=n[s]}l.forEach(d=>d.parentNode.removeChild(d))}const Bn=i=>{let e=i.nodeType===11?0:1;const t=document.createTreeWalker(i,133,null,!1);for(;t.nextNode();)e++;return e},te=(i,e=-1)=>{for(let t=e+1;t<i.length;t++){const n=i[t];if(si(n))return t}return-1};/**
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
 */const Dn=new WeakMap,oe=i=>typeof i=="function"&&Dn.has(i),k={},Ut={};/**
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
 */class je{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=Rt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,o=0,c=0,a=r.nextNode();for(;o<n.length;)if(s=n[o],si(s)){for(;c<s.index;)c++,a.nodeName==="TEMPLATE"&&(t.push(a),r.currentNode=a.content),(a=r.nextNode())===null&&(r.currentNode=t.pop(),a=r.nextNode());if(s.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return Rt&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const jn=` ${T} `;class oi{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const s=this.strings[r],o=s.lastIndexOf("<!--");n=(o>-1||n)&&s.indexOf("-->",o+1)===-1;const c=De.exec(s);t+=c===null?s+(n?jn:ni):s.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+T}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}/**
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
 */const Ze=i=>i===null||!(typeof i=="object"||typeof i=="function"),ai=i=>Array.isArray(i)||!(!i||!i[Symbol.iterator]);class li{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new ci(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const s=this.parts[r];if(s!==void 0){const o=s.value;if(Ze(o)||!ai(o))n+=typeof o=="string"?o:String(o);else for(const c of o)n+=typeof c=="string"?c:String(c)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ci{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===k||Ze(e)&&e===this.value||(this.value=e,oe(e)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const e=this.value;this.value=k,e(this)}this.value!==k&&this.committer.commit()}}class xe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(N()),this.endNode=e.appendChild(N())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=N()),e.__insert(this.endNode=N())}insertAfterPart(e){e.__insert(this.startNode=N()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=k,t(this)}const e=this.__pendingValue;e!==k&&(Ze(e)?e!==this.value&&this.__commitText(e):e instanceof oi?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ai(e)?this.__commitIterable(e):e===Ut?(this.value=Ut,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n=typeof(e=e==null?"":e)=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof je&&this.value.template===t)this.value.update(e.values);else{const n=new je(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],n===void 0&&(n=new xe(this.options),t.push(n),r===0?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Be(this.startNode.parentNode,e.nextSibling,this.endNode)}}class In{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=k,t(this)}if(this.__pendingValue===k)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=k}}class Fn extends li{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new zn(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class zn extends ci{}let di=!1;(()=>{try{const i={get capture(){return di=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch{}})();class Hn{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=r=>this.handleEvent(r)}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const s=this.__pendingValue;this.__pendingValue=k,s(this)}if(this.__pendingValue===k)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Vn(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=k}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Vn=i=>i&&(di?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);function Wn(i){let e=ae.get(i.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},ae.set(i.type,e));let t=e.stringsArray.get(i.strings);if(t!==void 0)return t;const n=i.strings.join(T);return t=e.keyString.get(n),t===void 0&&(t=new ri(i,i.getTemplateElement()),e.keyString.set(n,t)),e.stringsArray.set(i.strings,t),t}const ae=new Map,F=new WeakMap;/**
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
 */const qn=new class{handleAttributeExpressions(i,e,t,n){const r=e[0];return r==="."?new Fn(i,e.slice(1),t).parts:r==="@"?[new Hn(i,e.slice(1),n.eventContext)]:r==="?"?[new In(i,e.slice(1),t)]:new li(i,e,t).parts}handleTextExpression(i){return new xe(i)}};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const E=(i,...e)=>new oi(i,e,"html",qn),hi=(i,e)=>`${i}--${e}`;let be=!0;window.ShadyCSS===void 0?be=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),be=!1);const Kn=i=>e=>{const t=hi(e.type,i);let n=ae.get(t);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},ae.set(t,n));let r=n.stringsArray.get(e.strings);if(r!==void 0)return r;const s=e.strings.join(T);if(r=n.keyString.get(s),r===void 0){const o=e.getTemplateElement();be&&window.ShadyCSS.prepareTemplateDom(o,i),r=new ri(e,o),n.keyString.set(s,r)}return n.stringsArray.set(e.strings,r),r},Zn=["html","svg"],ui=new Set,Jn=(i,e,t)=>{ui.add(i);const n=t?t.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(s===0)return void window.ShadyCSS.prepareTemplateStyles(n,i);const o=document.createElement("style");for(let l=0;l<s;l++){const h=r[l];h.parentNode.removeChild(h),o.textContent+=h.textContent}(l=>{Zn.forEach(h=>{const d=ae.get(hi(h,l));d!==void 0&&d.keyString.forEach(u=>{const{element:{content:p}}=u,v=new Set;Array.from(p.querySelectorAll("style")).forEach(f=>{v.add(f)}),Mt(u,v)})})})(i);const c=n.content;t?function(l,h,d=null){const{element:{content:u},parts:p}=l;if(d==null)return void u.appendChild(h);const v=document.createTreeWalker(u,133,null,!1);let f=te(p),w=0,S=-1;for(;v.nextNode();)for(S++,v.currentNode===d&&(w=Bn(h),d.parentNode.insertBefore(h,d));f!==-1&&p[f].index===S;){if(w>0){for(;f!==-1;)p[f].index+=w,f=te(p,f);return}f=te(p,f)}}(t,o,c.firstChild):c.insertBefore(o,c.firstChild),window.ShadyCSS.prepareTemplateStyles(n,i);const a=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)e.insertBefore(a.cloneNode(!0),e.firstChild);else if(t){c.insertBefore(o,c.firstChild);const l=new Set;l.add(o),Mt(t,l)}};window.JSCompiler_renameProperty=(i,e)=>i;const Ie={toAttribute(i,e){switch(e){case Boolean:return i?"":null;case Object:case Array:return i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){switch(e){case Boolean:return i!==null;case Number:return i===null?null:Number(i);case Object:case Array:return JSON.parse(i)}return i}},pi=(i,e)=>e!==i&&(e==e||i==i),Re={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:pi};class fi extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);r!==void 0&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,n)=>this._classProperties.set(n,t))}}static createProperty(e,t=Re){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this._requestUpdate(e,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Re}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of n)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=pi){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||Ie,s=typeof r=="function"?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||Ie.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const n=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Re){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(s!==void 0){const o=r._propertyValueToAttribute(t,n);if(o===void 0)return;this._updateState=8|this._updateState,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(r!==void 0){const s=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,s),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(e!==void 0){const r=this.constructor,s=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(n){throw e=!1,this._markUpdated(),n}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,n)=>this._propertyToAttribute(n,this[n],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}fi.finalized=!0;/**
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
 */const Gn=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function y(i){return(e,t)=>t!==void 0?((n,r,s)=>{r.constructor.createProperty(s,n)})(i,e,t):Gn(i,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const vi="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mi=Symbol();class Bt{constructor(e,t){if(t!==mi)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(vi?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Yn=(i,...e)=>{const t=e.reduce((n,r,s)=>n+(o=>{if(o instanceof Bt)return o.cssText;if(typeof o=="number")return o;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[s+1],i[0]);return new Bt(t,mi)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Dt={};class Fe extends fi{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(e===void 0)this._styles=[];else if(Array.isArray(e)){const t=(s,o)=>s.reduceRight((c,a)=>Array.isArray(a)?t(a,c):(c.add(a),c),o),n=t(e,new Set),r=[];n.forEach(s=>r.unshift(s)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?vi?this.renderRoot.adoptedStyleSheets=e.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Dt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const r=document.createElement("style");r.textContent=n.cssText,this.renderRoot.appendChild(r)}))}render(){return Dt}}Fe.finalized=!0,Fe.render=(i,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const n=t.scopeName,r=F.has(e),s=be&&e.nodeType===11&&!!e.host,o=s&&!ui.has(n),c=o?document.createDocumentFragment():e;if(((a,l,h)=>{let d=F.get(l);d===void 0&&(Be(l,l.firstChild),F.set(l,d=new xe(Object.assign({templateFactory:Wn},h))),d.appendInto(l)),d.setValue(a),d.commit()})(i,c,Object.assign({templateFactory:Kn(n)},t)),o){const a=F.get(c);F.delete(c);const l=a.value instanceof je?a.value.template:void 0;Jn(n,c,l),Be(e,e.firstChild),e.appendChild(c),F.set(e,a)}!r&&s&&window.ShadyCSS.styleElement(e.host)};var g=function(i,e,t,n){var r,s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(r=i[c])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let m=class extends Fe{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",i=>this.handleInstallPromptEvent(i)),document.addEventListener("keyup",i=>{i.key==="Escape"&&this.cancel()})}static get styles(){return Yn`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(i){this.deferredprompt=i,this.hasprompt=!0,i.preventDefault()}checkManifest(i){i.icons&&i.icons[0]?i.name?i.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const i=await fetch(this.manifestpath),e=await i.json();if(this.manifestdata=e,this.manifestdata)return this.checkManifest(this.manifestdata),e}catch{return null}}scrollToLeft(){const i=this.shadowRoot.querySelector("#screenshots");i.scrollBy({left:-i.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const i=this.shadowRoot.querySelector("#screenshots");i.scrollBy({left:i.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let i=new CustomEvent("show");this.dispatchEvent(i)}closePrompt(){this.openmodal=!1;let i=new CustomEvent("hide");this.dispatchEvent(i)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let i=new CustomEvent("show");if(this.dispatchEvent(i),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((i,e)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let t=new CustomEvent("hide");this.dispatchEvent(t),i()})}render(){return E`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?E`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?E`<div id="installModalWrapper">${this.openmodal?E`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?E`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(i=>E`<li>${i}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?E`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(i=>E`<div><img alt="App Screenshot" src="${i.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?E`<p id="iosText">${this.iosinstallinfotext}</p>`:E`<div id="buttonsContainer">${this.deferredprompt?E`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:E`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Oe;g([y({type:String})],m.prototype,"manifestpath",void 0),g([y({type:String})],m.prototype,"iconpath",void 0),g([y({type:Object})],m.prototype,"manifestdata",void 0),g([y({type:Boolean})],m.prototype,"openmodal",void 0),g([y({type:Boolean})],m.prototype,"showopen",void 0),g([y({type:Boolean})],m.prototype,"isSupportingBrowser",void 0),g([y({type:Boolean})],m.prototype,"isIOS",void 0),g([y({type:Boolean})],m.prototype,"installed",void 0),g([y({type:Boolean})],m.prototype,"hasprompt",void 0),g([y({type:Boolean})],m.prototype,"usecustom",void 0),g([y({type:Array})],m.prototype,"relatedApps",void 0),g([y({type:String})],m.prototype,"explainer",void 0),g([y({type:String})],m.prototype,"featuresheader",void 0),g([y({type:String})],m.prototype,"descriptionheader",void 0),g([y({type:String})],m.prototype,"installbuttontext",void 0),g([y({type:String})],m.prototype,"cancelbuttontext",void 0),g([y({type:String})],m.prototype,"iosinstallinfotext",void 0),g([y()],m.prototype,"deferredprompt",void 0),m=g([(Oe="pwa-install",i=>typeof i=="function"?((e,t)=>(window.customElements.define(e,t),t))(Oe,i):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(Oe,i))],m);var Xn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Y=(i,e,t,n)=>{for(var r=n>1?void 0:n?Qn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Xn(e,t,r),r};let I=class extends L{constructor(){super(),this.subtitle="\u7B2C\u4E8C\u5C4A",this.title="\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",this.time="8 \u6708 6 \u65E5 13:00 - 17:00",this.description=`
    \u4E3A\u52A0\u901F\u63A8\u52A8\u6E10\u8FDB\u5F0F Web \u5E94\u7528 (PWA) \u5728\u4E2D\u56FD\u7684\u53D1\u5C55\uFF0C\u5FAE\u8F6F\u4E0E\u82F1\u7279\u5C14\u643A\u624B\u4E3E\u529E\u201C\u7B2C\u4E8C\u5C4A\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u201D\u3002
    \u672C\u6B21\u6D3B\u52A8\u9080\u8BF7\u4E00\u4F17\u4E1A\u754C\u5927\u5496\u56F4\u7ED5 PWA \u5C55\u5F00\u5206\u4EAB\uFF0C\u63A2\u8BA8\u6700\u65B0\u6280\u672F\u8FDB\u5C55\uFF0C\u53CA PWA \u751F\u6001\u7684\u5B9E\u8DF5\u4E0E\u843D\u5730\u3002
    
    \u671F\u5F85\u4E0E\u60A8\u7EBF\u4E0A\u76F8\u805A\u3002
    `,this.message="Welcome!"}static get styles(){return le`
    .home {
      background: #62278d;
      background: linear-gradient(to bottom,  rgba(61, 20, 136, 1) 0%, #62278d 80%, #2cc09b 100%);
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
        font-size: clamp(38px, 6vw, 88px);
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

      #schedule {
        background: rgba(0, 0, 0, 0.2);
      }

      fluent-card {
        padding: 1rem;
        margin-bottom: 1rem;
        color: #fff;
        border: 0px;
        border-radius: 0px;
        background: transparent;
        box-shadow: none;
      }

      #schedule fluent-card {
        display: flex;
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

      .divider svg {
        width: 20px;
        height: 20px;
        fill: rgba(0, 0, 0, 0.2);
      }

      .title {
        font-weight: 600;
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
    `}async firstUpdated(){console.log("\u6B22\u8FCE\u60A8!")}render(){return K`
      <app-header></app-header>
      <div class="home">
        <div class="hero">
          <h3>${this.subtitle}</h3>
          <h2>${this.title}</h2>
          <h3 class="h3b">${this.time}</h3>
          <h1>在线 免费 分享</h1>
          <h1 class="h1b">助您使用 PWA 获得成功</h1>
        </div>
        <fluent-card> ${this.description} </fluent-card>

        <div id="schedule">
          <fluent-card>
            <div class="time">13:00</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">开幕致辞</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">张琦 / 资深技术总监</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">13:10</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">PWA 愿景</div>
              <div class="details">
                <div class="avatar" id="icon_alex"></div>
                <div class="description">
                  <div class="nametitle">Alex Russell / PWA 之父</div>
                  <div class="team">微软 Edge 团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">13:40</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">微软 PWA</div>
              <div class="details">
                <div class="avatar" id="icon_edwin"></div>
                <div class="description">
                  <div class="nametitle">宋青见 / 首席产品经理</div>
                  <div class="team">微软 Edge · 开发者生态 Bio</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">14:30</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">Taro PWA</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">Joy? / 资深技术总监</div>
                  <div class="team">京东零售集团凹凸实验室</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">15:20</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">腾讯文档 PWA 实践</div>
              <div class="details">
                <div class="avatar" id="icon_harry"></div>
                <div class="description">
                  <div class="nametitle">彭伟宏 / 前端工程师</div>
                  <div class="team">腾讯 PCG 平台与内容事业群</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">16:10</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">新兴 Web 技术助力 PWA</div>
              <div class="details">
                <div class="avatar" id="icon_belem"></div>
                <div class="description">
                  <div class="nametitle">张敏 / 软件技术经理</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>

          <fluent-card>
            <div class="time">17:00</div>
            <div class="divider"></div>
            <div class="topic">
              <div class="title">嘉宾问答</div>
              <div class="details">
                <div class="avatar" id="icon_qi"></div>
                <div class="description">
                  <div class="nametitle">张琦 / 资深技术总监</div>
                  <div class="team">英特尔 Web 平台工程团队</div>
                </div>
              </div>
            </div>
          </fluent-card>
        </div>

          <pwa-install title="安装 中国 PWA 开发者日">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
              />
            </svg>
          </pwa-install>

          <app-footer></app-footer>
        </div>
      </div>
    `}};Y([U({type:String})],I.prototype,"subtitle",2);Y([U({type:String})],I.prototype,"title",2);Y([U({type:String})],I.prototype,"time",2);Y([U({type:String})],I.prototype,"description",2);Y([U()],I.prototype,"message",2);I=Y([de("app-home")],I);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,gi=(i,e,t,n)=>{for(var r=n>1?void 0:n?tr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&er(e,t,r),r};let ze=class extends L{constructor(){super(),this.enableBack=!1}static get styles(){return le`
     header {
      background-color: #3d1488;
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
        fill: rgba(255, 255, 255, 0.9);
        margin-bottom: -4px;
      }

      .back:hover svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(255, 255, 255, 1);
        margin-bottom: -4px;
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(i){i.has("enableBack")&&console.log("enableBack",this.enableBack)}share(){navigator.share&&navigator.share({title:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",text:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5",url:"https://pwadev.io"})}render(){return K`
      <header>
        <div id="back-button-block">
          ${this.enableBack?K`<fluent-anchor class="back" appearance="primary" href="/">
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
    `}};gi([U({type:Boolean})],ze.prototype,"enableBack",2);ze=gi([de("app-header")],ze);var ir=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,_i=(i,e,t,n)=>{for(var r=n>1?void 0:n?nr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&ir(e,t,r),r};let He=class extends L{constructor(){super(),this.enableBack=!1}static get styles(){return le`

      
    #menuToggle
    {
      display: block;
      position: relative;
      top: 0px;
      right: 16px;
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
      
      background: rgba(255, 255, 255, 0.95);
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
      padding: 2rem 0px;
    }

    #menu div:hover
    {
      background: #3d1488;
    }

    #menu div:hover fluent-anchor {
      color: #fff;
    }

    #menu fluent-anchor {
      font-size: clamp(26px, 4vw, 44px);
      transition: color 0.3s ease;
      color: #3d1488;
    }

    #menuToggle input:checked ~ #menu
    {
      transform: translate(0, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    @media only screen and (max-width: 640px) {
      #menu
      {
        width: 80vw;
      }
      #menuToggle input:checked ~ #menu
      {
        transform: translate(12vw, 0);
      }
    }
    `}render(){return K`
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
          <div><fluent-anchor href="/mobile" appearance="primary">测试</fluent-anchor></div>
        </div>
      </div>
    </nav>
    `}};_i([U({type:Boolean})],He.prototype,"enableBack",2);He=_i([de("app-nav")],He);var rr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,yi=(i,e,t,n)=>{for(var r=n>1?void 0:n?sr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&rr(e,t,r),r};let Ve=class extends L{constructor(){super(),this.enableBack=!1}static get styles(){return le`
      footer {
        padding: 0 16px 16px 16px;
      }
      .suggest {
        margin: 0px auto;
        text-align: center;
        padding: 16px;
      }
      .suggest a {
        color: rgba(61, 20, 136, 0.8);
        text-decoration: none;
      }

      .suggest a:hover {
        color: rgba(61, 20, 136, 1.0);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(i){i.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return K`
      <footer>
        <div class="suggest">同样推荐您访问 <a href="https://pwasummit.org/">pwasummit.org</a>, 了解全球最新 PWA 技术及动态。PWA Summit 2022 将于今年 10 月线上举行。</div>
        <div>&copy;2022 中国 PWA 开发者日 行为准则 关于我们</div>
      </footer>
    `}};yi([U({type:Boolean})],Ve.prototype,"enableBack",2);Ve=yi([de("app-footer")],Ve);var or=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,lr=(i,e,t,n)=>{for(var r=n>1?void 0:n?ar(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&or(e,t,r),r};let jt=class extends L{static get styles(){return le`
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
    `}constructor(){super()}firstUpdated(){var e;new M((e=this.shadowRoot)==null?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/2022",component:"app-2022",action:async()=>{await B(()=>import("./app-2022.4a4f8727.js"),[])}},{path:"/2021",component:"app-2021",action:async()=>{await B(()=>import("./app-2021.85449e5f.js"),[])}},{path:"/mp",component:"app-mediaplayer",action:async()=>{await B(()=>import("./app-mediaplayer.a2f24a15.js"),[])}},{path:"/about",component:"app-about",action:async()=>{await B(()=>import("./app-about.6b8d6342.js"),[])}},{path:"/news",component:"app-news",action:async()=>{await B(()=>import("./app-news.7b77f52e.js"),[])}},{path:"/mobile",component:"app-mobile",action:async()=>{await B(()=>import("./app-mobile.07858541.js"),[])}},{path:"/tutorial",component:"app-tutorial",action:async()=>{await B(()=>import("./app-tutorial.bbc153e6.js"),[])}}]}]),Un({immediate:!0})}render(){return K`
      <main id="routerOutlet">
      </main>
    `}};jt=lr([de("app-index")],jt);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");export{K as $,U as e,de as n,le as r,L as s};
//# sourceMappingURL=index.e2b63653.js.map
